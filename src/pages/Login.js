// pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = savedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // Optional: Save logged-in user
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'blue' }}>
        Don't have an account? Register
      </p>
    </div>
  );
}

export default Login;
