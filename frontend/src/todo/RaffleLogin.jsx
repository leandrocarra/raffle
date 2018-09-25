import React, { Component } from 'react';
import IconLogin from './IconLogin';

class RaffleLogin extends Component {
  render() {
    const handleSetLoginUser = (e) => {
      let teste = e.target.value
      console.log(teste)
    }
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
                placeholder="NOME"
                onChange={handleSetLoginUser}
                />

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
