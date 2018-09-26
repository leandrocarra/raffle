import React, { Component } from 'react';
import IconLogin from './IconLogin';

class RaffleLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      surName: '',
      hide: 'none'
    }
  }

  render() {
    const handleSetLoginName = (e) => {
      let loginUserName = e.target.value;
      this.setState({userName: loginUserName})
    }
    const handleSetLoginSurName = (e) => {
      let loginSurName = e.target.value;
      this.setState({surName: loginSurName})
    }
    const handleSetStorageLogin = () => {
      localStorage.setItem('name', this.state.userName)
      localStorage.setItem('surName', this.state.surName)
      displayLogin()
    }
    const displayLogin = () => {
      if (this.state.userName !== '' && this.state.surName !== ''){
        this.setState({
          hide: 'none'
        })
      }
    }
    const checkUser = () => {
      if (localStorage.getItem('name') !== '' && localStorage.getItem('surName') !== ''){
        this.setState({
          hide: 'none'
        })
      }
    }
    return (
      <span className={this.state.hide}>
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
                onChange={handleSetLoginName}
                />
              <input
                className="raffle-login__fields"
                type="text"
                name="nickName"
                placeholder="SOBRENOME"
                onChange={handleSetLoginSurName}
              />
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
