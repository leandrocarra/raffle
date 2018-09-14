import React, { Component } from 'react';
import IconLogin from './IconLogin';
import './RaffleLogin.css';

class RaffleLogin extends Component {
  render() {
    return (
      <span>
        <div className="raffle-login"></div>
        <div className="raffle-login__container">
          <IconLogin/>
          <div className="raffle-login__name">
            Qual é o seu nome?
          </div>
          <div className="raffle-login__container-input">
            <span className="raffle-login__fields-content">
              <input
                className="raffle-login__fields"
                type="text"
                name="name"
                placeholder="NOME"/>

              <input
                className="raffle-login__fields"
                type="text"
                name="nickName"
                placeholder="SOBRENOME"/>
            </span>
            <input
              className="raffle-login__submit"
              type="submit"
              value="&#8594;"/>
          </div>
        </div>
      </span>
    );
  }
}

export default RaffleLogin;
