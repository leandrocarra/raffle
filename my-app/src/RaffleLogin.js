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
          <div className="raffle-login__container-input">
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

            <input
              className="raffle-login__submit"
              type="submit"
              value="OK"/>
          </div>
        </div>
      </span>
    );
  }
}

export default RaffleLogin;
