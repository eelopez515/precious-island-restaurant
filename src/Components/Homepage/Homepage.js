import React, { useState, useEffect } from 'react';
//Components
import Loading from '../Loading/Loading';
import db from '../../Firebase/firebase';
import logoGrey from '../../Assets/Homepage/logo-grey.png';
import './Homepage.css';

function Homepage() {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const collection = db.collection('homepage');
      const data = await collection.get();
      data.docs.forEach((doc) => {
        setImage(doc.data());
      });
    };
    fetchImage();
  }, []);

  return (
    <div className="homepage">
      {!image ? (
        <Loading />
      ) : (
        <div className="homepage__image__container">
          <img
            className="homepage__image"
            src={image.image}
            alt="Dim Sum Dish"
          />
        </div>
      )}
      <div className="homepage__footer">
        <div className="homepage__footer__contents">
          <img className="homepage__footer__image" src={logoGrey} alt="" />
          <div className="homepage__footer__info">
            <p>
              <strong className="homepage__footer__title">Address</strong>
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
              <strong className="homepage__footer__title">Telephone</strong>
              <br />
              <a href="tel:718-668-2700">718.668.2700</a>
            </p>
            <br />
            <p>
              <strong className="homepage__footer__title">Hours</strong>
              <br /> <span className="homepage__hours">
                Mon-Fri 11am-9pm{' '}
              </span>{' '}
              <br />
              <span className="homepage__hours">Sat-Sun 10am-9pm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
