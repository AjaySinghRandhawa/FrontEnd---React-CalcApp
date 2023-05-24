import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function SignUpPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      const response = await fetch('http://localhost:3000/signup', {
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
        navigate('/login', { replace: true });
      } else {
        console.log('Signup failed');
        const errorData = await response.text();
        setErrorMessage('Username already exists');
      }
    } catch (error) {
      console.error('Signup error:', error.message);
      setErrorMessage('Error occurred during signup');
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /><br />
        <button type="submit">Sign Up</button>
        </form>
        <a href="/login">Login</a>
    </div>
  );
}

export default SignUpPage;
     
