import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import RaffleFloater from './RaffleFloater'

export default props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
        e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <span>
      <input
          id='description'
          className='form-control'
          placeholder='task here'
          value={'teste'}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          type="radio"
          ></input>
      {/* <div className="raffle-floater__shadow"></div> */}
      <div className="raffle-floater">
        <span className="raffle-floater__close">X</span>
        <p className="raffle-floater__title">CONFIRMAÇÃO</p>
        <div className="raffle-floater__content">
          <div className="raffle-floater__confirm-boy">
              ALEXANDRE
          </div>
          <div className="raffle-floater__confirm-girl">
              MANOELA
          </div>
        </div>
        <IconButton
            style='raffle-floater__confirm-button'
            onClick={props.handleAdd}
            >
        </IconButton>
      </div>
    </span>
  )
}
