import React, { useState } from 'react';
import Login from './components/Login';
import ChatInterface from './components/ChatInterface';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = (id) => {
    setUserId(id);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <ChatInterface userId={userId} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

