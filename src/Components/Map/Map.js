import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import './Map.css';

const { REACT_APP_GOOGLE_API } = process.env;

function Map() {
  const [selected, setSelected] = useState({
    lat: 40.570780622258425,
    lng: -74.11040065088055,
  });

  const mapStyles = {
    height: '75vh',
    width: '65vw',
  };
  const defaultCenter = {
    lat: 40.570780622258425,
    lng: -74.11040065088055,
  };
  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker
          onClick={() => setSelected(defaultCenter)}
          position={defaultCenter}
        />
        <InfoWindow clickable={true} position={selected}>
          <div className="map">
            <h4>Precious Island Dim Sum</h4>
            <p>366 New Dorp Ln</p>
            <p>Staten Island, NY 10306</p>
            <a
              className="directions__on__map"
              href="https://www.google.com/maps/dir//336+New+Dorp+Ln,+Staten+Island,+NY+10306/@40.571076,-74.11361,17z/data=!4m17!1m7!3m6!1s0x89c2494defb8280f:0xfb2d05ff3f411c5d!2s336+New+Dorp+Ln,+Staten+Island,+NY+10306!3b1!8m2!3d40.571076!4d-74.111416!4m8!1m0!1m5!1m1!1s0x89c2494defb8280f:0xfb2d05ff3f411c5d!2m2!1d-74.111416!2d40.571076!3e3"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
