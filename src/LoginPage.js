
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      });

      if (response.ok) {
        console.log('login request received');
        navigate('/calculator', { replace: true });
      } else {
        const errorData = await response.json();
        console.log('Incorrect login');
        setErrorMessage('Incorrect login credentials');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage('Error occurred during login');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /><br />
        <button type="submit">Login</button>
      </form>
      <a href="/signup">Sign Up</a>
    </div>
  );
}

export default LoginPage;
