import React, { useContext } from 'react';
import { ChatContext } from '../ChatContext';
import './ChatToggleButton.css';

const ChatToggleButton = () => {
    const { toggleChat } = useContext(ChatContext);

    return (
        <button className="chat-toggle-button" onClick={toggleChat}>
            <i className="fas fa-comments"></i>
        </button>
    );
};

export default ChatToggleButton;
