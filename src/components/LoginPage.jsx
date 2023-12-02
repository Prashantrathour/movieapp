import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate()

  const handleLogin = () => {
    // Assuming some basic validation for demo purposes
    if (username && password) {
      // Save user data in local storage
      const userData = { username, isLoggedIn: true };
      localStorage.setItem('user', JSON.stringify(userData));
navigate("/")
      // Update state to reflect logged in status
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem('user');

    // Update state to reflect logged out status
    setIsLoggedIn(false);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
