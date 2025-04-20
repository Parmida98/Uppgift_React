import React from 'react';
import moonImage from '../assets/moon.png';

interface HomeProps {
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ toggleTheme }) => {
  return (
    <><div style={{ minHeight: '10vh', paddingBottom: '190px' }}>
      <h1>Welcome to the Moon</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div><div><img src={moonImage} alt="Moon" className="bottom-image" /></div></>
  );
};

export default Home;