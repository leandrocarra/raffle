import React, { Component } from 'react';
import axios from 'axios';

import RaffleLogin from './RaffleLogin';
import RaffleTop from './RaffleTop';
import RaffleReward from './RaffleReward';
import RaffleGenders from './RaffleGenders';
import RaffleFloater from './RaffleFloater';
import RaffleConfirmed from './RaffleConfirmed';

import './App.css';

const URL = 'http://localhost:3003/api/raffle';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: 'description'
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    const description = this.state.description;
    axios.post(URL, {description})
    .then(resp => console.log('GRVOU'));
    console.log('CLICOU');
  };
  render() {
    return (
      <div className="raffle">
        {/*<RaffleLogin/>*/}
        <RaffleTop/>
        <div className="raffle__wrapper">
          <RaffleReward/>
          <RaffleGenders/>
        </div>
         <RaffleFloater
            handleAdd={this.handleAdd}
         />
        {/* <RaffleConfirmed/> */}
      </div>
    );
  }
}

export default App;
