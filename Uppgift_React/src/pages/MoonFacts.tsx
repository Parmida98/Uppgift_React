import React, { useState } from 'react';
import { MoonFact } from '../types/MoonInfo';
import moonImage from '../assets/moon.png';

const moonFacts: MoonFact[] = [
  { id: 1, title: 'Size and Distance', description: 'With a radius of about 1,080 miles (1,740 kilometers), the Moon is less than a third of the width of Earth. If Earth were the size of a nickel, the Moon would be about as big as a coffee bean. The Moon is an average of 238,855 miles (384,400 kilometers) away. That means 30 Earth-sized planets could fit in between Earth and the Moon. The Moon is slowly moving away from Earth, getting about an inch farther away each year.' },
  { id: 2, title: 'Orbit and Rotation', description: 'The Moon is rotating at the same rate that it revolves around Earth (called synchronous rotation), so the same hemisphere faces Earth all the time. Some people call the far side – the hemisphere we never see from Earth – the "dark side", but thats misleading. As the Moon orbits Earth, different parts are in sunlight or darkness at different times. The changing illumination is why, from our perspective, the Moon goes through phases. During a "full moon," the hemisphere of the Moon we can see from Earth is fully illuminated by the Sun. And a "new moon" occurs when the far side of the Moon has full sunlight, and the side facing us is having its night. The Moon makes a complete orbit around Earth in 27 Earth days and rotates or spins at that same rate, or in that same amount of time. Because Earth is moving as well – rotating on its axis as it orbits the Sun – from our perspective, the Moon appears to orbit us every 29 days.'},
  { id: 3, title: 'Formation', description: 'The Moon likely formed after a Mars-sized body collided with Earth several billion years ago. The resulting debris from both Earth and the impactor accumulated to form our natural satellite 239,000 miles (384,000 kilometers) away. The newly formed Moon was in a molten state, but within about 100 million years, most of the global "magma ocean" had crystallized, with less-dense rocks floating upward and eventually forming the lunar crust.' }
];

const MoonFacts: React.FC = () => {
  const [visibleFacts, setVisibleFacts] = useState<number[]>([]);

  const toggleFact = (id: number): void => {
    setVisibleFacts((prev) =>
      prev.includes(id) ? prev.filter((factId) => factId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="moon-wrapper">
        <div className="hero">
          <h2>Moon Facts</h2>
          {moonFacts.map((fact) => (
            <div className="fact-block" key={fact.id}>
              <h3>{fact.title}</h3>
              <button className='moonbutton' onClick={() => toggleFact(fact.id)}>
                {visibleFacts.includes(fact.id) ? 'Hide' : 'Show'} Description
              </button>
              {visibleFacts.includes(fact.id) && <p>{fact.description}</p>}
            </div>
          ))}
        </div>
        <img src={moonImage} alt="Moon" className="bottom-image" />
      </div>
    </>
  );
};

export default MoonFacts;