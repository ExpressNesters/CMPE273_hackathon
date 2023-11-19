import React, { useState, useEffect } from 'react';
import './ChatInterface.css'; // You'll create this CSS file to style the chat interface

function ChatInterface({ userId }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [newPrompt, setNewPrompt] = useState('');

  // Fetch chat history
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/responses/${userId}`)
      .then(response => response.json())
      .then(data => setChatHistory(data))
      .catch(error => console.error('Error fetching chat history:', error));
  }, [userId]);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (!newPrompt.trim()) return;

    const response = await fetch('http://127.0.0.1:5000/responses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, prompt: newPrompt }),
    });

    const data = await response.json();
    if (response.ok) {
      setChatHistory([...chatHistory, { prompt: newPrompt, response: data.response }]);
    } else {
      console.error('Error sending message:', data);
    }

    setNewPrompt('');
  };

  return (
    <div className="chat-container">
      <div className="header">Hi {userId}</div>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <div className="prompt">{chat.prompt}</div>
            <div className="response">{chat.response}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newPrompt}
          onChange={(e) => setNewPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;

