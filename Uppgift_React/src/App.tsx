import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MoonFacts from './pages/MoonFacts.tsx';
import './App.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', padding: '1rem' }}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/moon">Moon Facts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/moon" element={<MoonFacts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;