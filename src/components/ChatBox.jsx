import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! What can I help you with?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hide notification when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowNotification(false);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'll help you with that right away!",
        "Let me check that for you.",
        "Thank you for your message. Our team will get back to you soon.",
        "Could you please provide more details?",
        "I understand your query. How else can I assist you?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const newBotMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isBot: true
      };
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <i className="fas fa-comments"></i>
          <span>Chat with us</span>
          {showNotification && (
            <div className="notification-text">
              Need help? Let's chat!
            </div>
          )}
        </button>
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chat-body">
            <div className="messages-container">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.isBot ? 'bot' : 'user'}`}
                >
                  {message.isBot && (
                    <div className="bot-avatar">
                      <i className="fas fa-headset"></i>
                    </div>
                  )}
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox; 