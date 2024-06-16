import React, { useContext, useState, useEffect, useRef } from 'react';
import { ChatContext } from '../ChatContext';
import { run } from '../api/gemini';
import './ChatWindow.css';

const ChatWindow = () => {
    const { isChatOpen } = useContext(ChatContext);
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('.');
    const chatBodyRef = useRef(null);

    useEffect(() => {
        let loadingInterval;
        if (isLoading) {
            loadingInterval = setInterval(() => {
                setLoadingText((prev) => {
                    switch (prev) {
                        case '.':
                            return '..';
                        case '..':
                            return '...';
                        case '...':
                        default:
                            return '.';
                    }
                });
            }, 500); // Change loading text every 500ms
        } else {
            setLoadingText('.');
        }

        return () => clearInterval(loadingInterval);
    }, [isLoading]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputText.trim() === '') return;

        const userMessage = { text: inputText, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const botMessageText = await run(inputText);
            const botMessage = {
                text: formatText(botMessageText),
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error generating response:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatText = (text) => {
        text = text.replace(/\* \*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>')
        return text;
    };

    return (
        isChatOpen && (
            <div className="chat-window">
                <div className="chat-header">
                    <h2>Chat Support</h2>
                </div>
                <div className="chat-body" ref={chatBodyRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            <span dangerouslySetInnerHTML={{ __html: message.text }} />
                        </div>
                    ))}
                    {isLoading && (
                        <div className="chat-message bot-message loading">
                            {loadingText}
                        </div>
                    )}
                </div>
                <div className="chat-footer">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Know about Diwali..."
                        />
                        <button type="submit">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default ChatWindow;


