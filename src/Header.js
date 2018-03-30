import React, { Component } from 'react';
import banner from './asset/banner.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={banner} className="App-banner" alt="banner"/>
        </div>
    );
  }
}

export default Header;
