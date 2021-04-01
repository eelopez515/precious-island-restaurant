import React from 'react';
//Components
import Background from '../Background/Background';
import Map from '../Map/Map';

import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__titles">
            <p>
              <strong className="contact__title">Address</strong>
              <br />
              <a
                href="https://www.google.com/maps/dir//336+New+Dorp+Ln,+Staten+Island,+NY+10306/@40.571076,-74.11361,17z/data=!4m17!1m7!3m6!1s0x89c2494defb8280f:0xfb2d05ff3f411c5d!2s336+New+Dorp+Ln,+Staten+Island,+NY+10306!3b1!8m2!3d40.571076!4d-74.111416!4m8!1m0!1m5!1m1!1s0x89c2494defb8280f:0xfb2d05ff3f411c5d!2m2!1d-74.111416!2d40.571076!3e3"
                target="_blank"
                rel="noreferrer"
              >
                336 New Dorp Ln <br />
                Staten Island, NY 10306
              </a>
            </p>
            <br />
            <p>
              <strong className="contact__title">Telephone</strong>
              <br />
              <a href="tel:718-668-2700">718.668.2700</a>
            </p>
            <br />
            <p>
              <strong className="contact__title">Hours</strong>
              <br /> <span className="contact__hours">
                Mon-Fri 11am-9pm{' '}
              </span>{' '}
              <br />
              <span className="contact__hours">Sat-Sun 10am-9pm</span>
            </p>
          </div>
          <div className="contact__map">
            <Map />
          </div>
        </div>
        <Background />
      </div>
    </div>
  );
}

export default Contact;
