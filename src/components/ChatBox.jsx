import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api/chat'
  : 'https://inochiagainbackend.onrender.com/api/chat';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setShowNotification(false);
    }
  }, [isOpen]);

  const sendChatMessage = async (messageText, maxRetries = 3) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Chat Error:', error);
      if (maxRetries > 0) {
        // Wait for 1 second before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sendChatMessage(messageText, maxRetries - 1);
      }
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setRetryCount(0);

    try {
      const reply = await sendChatMessage(inputMessage);
      
      const botMessage = {
        id: messages.length + 2,
        text: reply,
        isBot: true
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to get chat response:', error);
      
      // Only show error message if we've exhausted retries
      if (retryCount >= 2) {
        const errorMessage = {
          id: messages.length + 2,
          text: "I apologize, but I'm having technical difficulties. Please try again later.",
          isBot: true,
          isError: true
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        setRetryCount(prev => prev + 1);
      }
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
                  className={`message ${message.isBot ? 'bot' : 'user'} ${message.isError ? 'error' : ''}`}
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
              {isTyping && (
                <div className="message bot">
                  <div className="bot-avatar">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="message-content typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
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
              disabled={isTyping}
            />
            <button 
              className="send-button" 
              onClick={handleSendMessage}
              disabled={isTyping || !inputMessage.trim()}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox; 