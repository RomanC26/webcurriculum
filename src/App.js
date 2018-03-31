import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Experience from './Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
      </div>
    );
  }
}

export default App;
