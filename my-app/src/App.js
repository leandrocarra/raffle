import React, { Component } from 'react';

import RaffleLogin from './RaffleLogin';
import RaffleTop from './RaffleTop';
import RaffleReward from './RaffleReward';
import RaffleGenders from './RaffleGenders';
import RaffleFloater from './RaffleFloater';
import RaffleConfirmed from './RaffleConfirmed';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="raffle">
        {/*<RaffleLogin/>*/}
        <RaffleTop/>
        <div className="raffle__wrapper">
          <RaffleReward/>
          <RaffleGenders/>
        </div>
        <RaffleFloater/>
        {/*<RaffleConfirmed/>*/}
      </div>
    );
  }
}

export default App;
