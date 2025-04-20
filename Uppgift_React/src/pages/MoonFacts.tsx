import React, { useState } from 'react';
import { MoonFact } from '../types/MoonInfo';
import moonImage from '../assets/moon.png';

const moonFacts: MoonFact[] = [
  { id: 1, title: 'Diameter', description: 'The moon has a diameter of about 3,474 km.' },
  { id: 2, title: 'Gravity', description: 'Gravity on the moon is 1/6th of Earth.' },
];

const MoonFacts: React.FC = () => {
  const [visibleFacts, setVisibleFacts] = useState<number[]>([]);

  const toggleFact = (id: number): void => {
    setVisibleFacts((prev) =>
      prev.includes(id) ? prev.filter((factId) => factId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Moon Facts</h2>
      {moonFacts.map((fact) => (
        <div key={fact.id}>
          <h3>{fact.title}</h3>
          <button onClick={() => toggleFact(fact.id)}>
            {visibleFacts.includes(fact.id) ? 'Hide' : 'Show'} Description
          </button>
          {visibleFacts.includes(fact.id) && <p>{fact.description}</p>}
        </div>
      ))}
      <img src={moonImage} alt="Moon" className="bottom-image" style={{ minHeight: '10vh', paddingBottom: '190px' }}/>
    </div>
  );
};

export default MoonFacts;