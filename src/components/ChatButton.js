import React from 'react';
import './ChatButton.css';
import logoname4 from '../assets/imagee-2.png'; // Import image

function ChatButton() {
  return (
    <div className="chat-container">
      <div className="chat-content">
        <div className="chat-text">
          <h2 className="chat-title">How can I help?<br />What happened today?</h2>
        </div>
        <img src={logoname4} alt="Chat Logo" className="chat-logo" />
      </div>
       <a href="https://chat.earkick.com/chat/dr_panda/c12c77ac" className="chat-button">Chat With Panda</a>
    </div>
  );
}

export default ChatButton;
