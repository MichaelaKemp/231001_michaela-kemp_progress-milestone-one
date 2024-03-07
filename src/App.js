import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ChatPage from './Chat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/Home" className="nav-link">Home</Link></li>
            <li><Link to="/Chat" className="nav-link">Chat</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
