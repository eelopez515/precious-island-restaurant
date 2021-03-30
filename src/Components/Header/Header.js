import React from 'react';
import { withRouter } from 'react-router';
//Components
import headerLogo from '../../Assets/Header/Header-Logo.png';

import './Header.css';

function Header({ history }) {
  return (
    <div className="header">
      <div className="header__image">
        <img
          onClick={() => history.push('/')}
          className="image"
          src={headerLogo}
          alt="Restaurant Logo"
        />
      </div>
      <div className="header__contents">
        <h3 className="header__content" onClick={() => history.push('/about')}>
          About
        </h3>
        <h3
          className="header__content"
          onClick={() => history.push('/gallery')}
        >
          Gallery
        </h3>
        <h3 className="header__content" onClick={() => history.push('/menu')}>
          Menu
        </h3>
        <h3
          className="header__content"
          onClick={() => history.push('/contact')}
        >
          Contact
        </h3>
      </div>
    </div>
  );
}

export default withRouter(Header);
