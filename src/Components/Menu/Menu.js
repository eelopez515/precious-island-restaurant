import React from 'react';
import ModalImage from 'react-modal-image';
import menuLogo from '../../Assets/Menu/menu-logo.png';
import frontMenu from '../../Assets/Menu/menu-front-cropped.png';
import backMenu from '../../Assets/Menu/menu-back.png';
//Components
import Background from '../Background/Background';

import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <div className="menu__contents">
        <div className="menu__logo">
          <img className="logo" src={menuLogo} alt="Logo" />
        </div>
        <div className="menu__front">
          <ModalImage
            className="menuFront"
            small={frontMenu}
            large={frontMenu}
            alt="Front of Menu"
          />
        </div>
        <div className="menu__back">
          <ModalImage
            className="menuBack"
            small={backMenu}
            large={backMenu}
            alt="Back of Menu"
          />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default Menu;
