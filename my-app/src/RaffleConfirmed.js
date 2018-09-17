import React, { Component } from 'react';
import './RaffleConfirmed.css';

class RaffleConfirmed extends Component {
  render() {
    return (
      <span>
        <div className="raffle-floater__shadow"></div>
        <div className="raffle-floater">
          <div className="raffle-confirmed__icon">
            <p>&#10003;</p>
          </div>
          <div className="raffle-confirmed">
            <h1 className="raffle-confirmed__success">Sucesso!</h1>
            <p className="raffle-confirmed__text">
              Obrigado por participar da brincadeira,
              esperamos que vc tenha acertado =)
            </p>
          </div>
        </div>
      </span>
    );
  }
}

export default RaffleConfirmed;
