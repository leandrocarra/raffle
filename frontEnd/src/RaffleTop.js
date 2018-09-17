import React, { Component } from 'react';
import './RaffleTop.css';

class RaffleTop extends Component {
  render() {
    return (
      <div className="raffle__top">
        <div className="raffle__top-rings">
          <div className="raffle__top-rings--inside"></div>
        </div>
        <div className="raffle__top-rings--right">
          <div className="raffle__top-rings--inside"></div>
        </div>
      </div>
    );
  }
}

export default RaffleTop;




