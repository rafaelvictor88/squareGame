import React, {useState} from 'react';
import '../styles/style.css';

const Home = () => {
  const [directions, setDirections] = useState({});
  const generateDirections = () => {
    const arrayDirections = ['top', 'bottom', 'left', 'right'];
    const min = Math.ceil(0);
    const max = Math.floor(arrayDirections.length);
    const arrayIndex = Math.floor(Math.random() * (max - min)) + min;
    // console.log(arrayDirections[arrayIndex]);
    return arrayDirections[arrayIndex];
  };
  const handleClick = (e) => {
    const clickValue = 50;
    const property = generateDirections();
    setDirections({ property: clickValue+'px'});
  }
  return (
    <div className="general-container">
      <div className="container-aside">
        <aside>
          <button className="start-button">start</button>
          <button className="restart-button">restart</button>
        </aside>
      </div>
      <div className="container-square">
        <div className="square" style={directions} onClick={handleClick}></div>
      </div>
    </div>
  )
};

export default Home;