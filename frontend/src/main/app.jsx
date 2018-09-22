import React from 'react'
import Routes from './routes'
import RaffleLogin from '../todo/RaffleLogin'
import RaffleReward from '../todo/RaffleReward'
import Menu from '../template/menu'

export default props => (
  <div className="raffle">
    <Menu/>
    {/* <RaffleLogin/> */}
    <div className="raffle__wrapper">
      <RaffleReward/>
      <Routes/>
    </div>
    {/* <RaffleFloater
        handleAdd={this.handleAdd}
    /> */}
    {/* <RaffleConfirmed/> */}
  </div>
)
