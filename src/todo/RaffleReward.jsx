import React, { Component } from 'react';

class RaffleReward extends Component {
  render() {
    return (
      <span>
        <div className="raffle__title-card">
          <h1 className="raffle__big-text">CARTELA</h1>
          <h3 className="raffle__normal-text">COM 80 NOMES</h3>
        </div>
        <div className="raffle__reward">
          <span className="raffle__title-reward">PRÊMIO:___________________________</span>
          <span className="raffle__title-description">A primeira foto com o Baby</span>
        </div>
      </span>
    );
  }
}

export default RaffleReward;


