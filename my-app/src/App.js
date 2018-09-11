import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="raffle">
        <div className="raffle__top">
          <div className="raffle__top-rings">
            <div className="raffle__top-rings--inside"></div>
          </div>
          <div className="raffle__top-rings--right">
            <div className="raffle__top-rings--inside"></div>
          </div>
        </div>
        <div className="raffle__wrapper"></div>
      </div>
    );
  }
}

export default App;
