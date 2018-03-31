import React, { Component } from 'react';
import banner from './asset/banner.svg';
import photo from './asset/photo-profil.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <div className="banner">
            <img src={banner} className="App-banner" alt="banner"/>
          </div>
          <div className="profil-container">
            <h1>Roman Collaud</h1>
            <h2>Apprenti 3ème année Swisscom SA</h2>
          </div>
          <div className="photo-container">
            <img src={photo} className="photo-cv" alt="profil"/>
          </div>
        </div>
    );
  }
}

export default Header;
