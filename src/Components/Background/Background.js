import React from 'react';
import backgroundImage from '../../Assets/About/About-Background.png';
import './Background.css';

function Background() {
  return (
    <div className="background">
      <img
        className="background__image"
        src={backgroundImage}
        alt="Mountain Drawing"
      />
    </div>
  );
}

export default Background;
