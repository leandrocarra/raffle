import React, { Component } from 'react';
import IconLogin from './IconLogin';

class RaffleLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      surName: ''
    }
  }
  render() {
    const handleSetLoginUser = (e) => {
      let loginUserName = e.target.value;
      this.setState({userName: loginUserName})
    }
    const handleSetLoginSurName = (e) => {
      let loginSurName = e.target.value;
    }

    const handleSetStorageLogin = () => {
      console.log(this.state.userName)
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
              value="&#8594;"
              onClick={handleSetStorageLogin}
              />
          </div>
        </div>
      </span>
    );
  }
}

export default RaffleLogin;
