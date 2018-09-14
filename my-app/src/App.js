import React, { Component } from 'react';

import RaffleLogin from './RaffleLogin';
import RaffleTop from './RaffleTop';
import RaffleReward from './RaffleReward';
import RaffleGenders from './RaffleGenders';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="raffle">

        <RaffleTop/>
        <div className="raffle__wrapper">
          <RaffleReward/>
          <RaffleGenders/>
        </div>
      </div>
    );
  }
}

export default App;
