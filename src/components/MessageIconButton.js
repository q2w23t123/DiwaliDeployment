import React from 'react';
import './MessageIconButton.css';

const MessageIconButton = () => {
    const handleClick = () => {
        window.open('https://forms.monday.com/forms/c48cf97138df6c4d2f8c2572e79af6dd?r=use1', '_blank');
    };

    return (
        <button className="message-icon-button" onClick={handleClick}>
            <i className="fas fa-envelope"></i>
        </button>
    );
};

export default MessageIconButton;
