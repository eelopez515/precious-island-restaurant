import React from 'react';
import backgroundLogo from '../../Assets/About/About-Background.png';
import flower from '../../Assets/About/Flower.png';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__title">
          <img src={flower} alt="flower" id="flower" className="left__flower" />
          <p className="title">Our Story</p>
          <img
            src={flower}
            alt="flower"
            id="flower"
            className="right__flower"
          />
        </div>
        <p className="about__story">
          Precious Island Tea opened its doors in 2017 after its owner
          recognized a growing demand for authentic Cantonese-Chinese cuisine on
          Staten Island. With a wide range of dishes available, including high
          quality Dim Sum prepared by our in-house chefs, the inspiration
          doesn’t come from the kitchen, it starts at home. Every dish has a
          story to tell, and our aim is to represent the best of Chinese culture
          for New York City, bringing together what matters most — family.
        </p>
        <img
          className="about__background"
          src={backgroundLogo}
          alt="Mountain Drawing"
        />
      </div>
    </div>
  );
}

export default About;
