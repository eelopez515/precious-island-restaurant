import React, { useState, useEffect } from 'react';
//Components
import Loading from '../Loading/Loading';
import db from '../../Firebase/firebase';
import './Homepage.css';

function Homepage() {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const collection = db.collection('homepage');
      const data = await collection.get();
      data.docs.forEach((doc) => {
        console.log(doc);
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
    </div>
  );
}

export default Homepage;
