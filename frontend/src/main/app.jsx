import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import RaffleLogin from '../todo/RaffleLogin'
import RaffleReward from '../todo/RaffleReward'

export default props => (
  <div className="raffle">
    <Menu/>{/* RaffleTop */}
    {/* <RaffleLogin/> */}
    <div className="raffle__wrapper">
      <RaffleReward/>
      <Routes/>{/*RaffleGenders */}
    </div>
    {/* <RaffleFloater
        handleAdd={this.handleAdd}
    /> */}
    {/* <RaffleConfirmed/> */}
  </div>
)
