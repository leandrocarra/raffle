import React, { Component } from 'react';

const RaffleFloater = ({handleAdd}) => (
  <span>
    <div className="raffle-floater__shadow"></div>
    <div className="raffle-floater">
      <span className="raffle-floater__close">X</span>
      <p className="raffle-floater__title">EU ACHO QUE É ...</p>
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
        >TENHO CERTEZA ABSOLUTA</button>
    </div>
  </span>
)

export default RaffleFloater;
