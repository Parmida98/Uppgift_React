import React from 'react';
import moonImage from '../assets/moon.png';

interface HomeProps {
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ toggleTheme }) => {
  return (
    <>
    <div className="hero">
      <h1>Welcome to the Moon</h1>
      <p> Our Moon shares a name with all moons simply because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610. <br></br>
        In Latin, the Moon was called Luna, which is the main adjective for all things Moon-related: lunar. <br></br>
        <br></br>
        <br></br>
        The many missions that have explored the Moon have found no evidence to suggest it has its own living things. <br></br>
        However, the Moon could be the site of future colonization by humans. <br></br>
        The discovery that the Moon harbors water ice, and that the highest concentrations occur within darkened craters at the poles, <br></br> 
        makes the Moon a little more hospitable for future human colonists. <br></br>
        </p>
      <div className="button-container"><button onClick={toggleTheme}>Light or Dark theme</button></div>
    </div>
    <img src={moonImage} alt="Moon" className="bottom-image" />
    </>
  );
};

export default Home;