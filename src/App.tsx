import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Menu from './components/menu';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Pages/Users';
import Register from './Pages/register';
import Login from './Pages/login';

function App() {
  const [token, setToken] = useState('');
  const [accessToken, setAccessToken] = useState('');
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard accessToken={accessToken} />} />
          <Route path="/users" element={<Users accessToken={accessToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} setAccessToken={setAccessToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
