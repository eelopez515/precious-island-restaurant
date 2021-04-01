import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import ModalImage from 'react-modal-image';
import db from '../../Firebase/firebase';
//Components
import Background from '../Background/Background';

import './Gallery.css';

function Gallery() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenuCollection = async () => {
      const fetchedData = [];
      const collection = db.collection('menu-gallery');
      const data = await collection.get();
      data.docs.forEach((doc) => {
        const docData = doc.data();
        fetchedData.push(docData);
      });
      setMenuData(fetchedData);
    };
    fetchMenuCollection();
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__contents">
        {!menuData ? (
          <Loading />
        ) : (
          menuData.map((data, index) => (
            <div key={index} className="gallery__content">
              <ModalImage
                className="gallery__image"
                hideDownload
                hideZoom
                small={data.image}
                large={data.image}
                alt={data.englishName}
              />
              <p className="englishName">{data.englishName}</p>
              <p className="chineseName">{data.chineseName}</p>
            </div>
          ))
        )}
      </div>
      <Background />
    </div>
  );
}

export default Gallery;
