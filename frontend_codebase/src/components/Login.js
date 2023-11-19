import React, { useState } from 'react';
import './Login.css'; // Ensure you have this CSS file for styling

function Login({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid: userId, password: password }),
      });

      if (response.ok) {
        setMessage('Login successful!');
        onLogin(userId); // Notify App.js
      } else {
        setMessage('Failed to log in. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid: userId, password: password }),
      });

      if (response.ok) {
        setMessage('Account created successfully! Please log in.');
        setIsNewUser(false);
      } else {
        setMessage('Failed to create an account. User ID might already be taken.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isNewUser ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={isNewUser ? handleSignUp : handleLogin}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-buttons">
            <button
              type="submit"
              className={`login-button ${isNewUser ? 'register' : 'login'}`}
            >
              {isNewUser ? 'Sign Up' : 'Login'}
            </button>
            <button
              type="button"
              onClick={() => setIsNewUser(!isNewUser)}
              className={`login-button ${isNewUser ? 'login' : 'register'}`}
            >
              {isNewUser ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;

