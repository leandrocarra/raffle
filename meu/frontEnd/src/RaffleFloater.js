import React, { Component } from 'react';
import './RaffleFloater.css';

const RaffleFloater = ({handleAdd}) => (
  <span>
    <div className="raffle-floater__shadow"></div>
    <div className="raffle-floater">
      <span className="raffle-floater__close">X</span>
      <p className="raffle-floater__title">CONFIRMAÇÃO</p>
      <div className="raffle-floater__content">
        <div className="raffle-floater__confirm-boy">
            ALEXANDRE
        </div>
        <div className="raffle-floater__confirm-girl">
            MANOELA
        </div>
      </div>
      <button
        className="raffle-floater__confirm-button"
        type="button"
        onClick={handleAdd}
        >CONFIRMO</button>
    </div>
  </span>
)

export default RaffleFloater;