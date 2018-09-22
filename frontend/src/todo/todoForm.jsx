import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import RaffleFloater from './RaffleFloater'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <li className={todo.done ? 'raffle__selected' : ''} key={todo._id}>
        <span className="raffle__effect"></span>
        <label htmlFor={todo.description}>
          <p className="raffle__name">{todo.description}</p>
          <small className="raffle__familiar">Livia Patrezze</small>
        </label>
        <input
          className="raffle__radio"
          type="radio"
          id={todo.description}
          value={todo.description}
          name="boyName">
        </input>
      </li>
    ))
  }

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
        e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <span>
      <div className="raffle__wrapper">
        <div className="raffle__wrapper-genders">
          <div className="raffle__wrapper-boy">
            <ul>
              <li className='raffle__select' >
                <span className="raffle__effect"></span>
                <label htmlFor='description'>
                  <p className="raffle__name">NOUTRO</p>
                  <small className="raffle__familiar">Livia Patrezze</small>
                </label>
                <input
                  id='description'
                  className="raffle__radio"
                  placeholder='task here'
                  value={'OUTRO'}
                  onChange={props.handleChange}
                  onKeyUp={keyHandler}
                  type="radio"
                  name="boyName"
                  >
                </input>
              </li>
              <li className='raffle__select' >
                <span className="raffle__effect"></span>
                <label htmlFor='description'>
                  <p className="raffle__name">NOUTRO</p>
                  <small className="raffle__familiar">Livia Patrezze</small>
                </label>
                <input
                  id='description'
                  className="raffle__radio"
                  placeholder='task here'
                  value={'OUTRO'}
                  onChange={props.handleChange}
                  onKeyUp={keyHandler}
                  type="radio"
                  name="boyName"
                  >
                </input>
              </li>
            </ul>
          </div>
          <div className="raffle__wrapper-girl">
            <ul>
              <li className="raffle__selected">
                FEMALE
              </li>
            </ul>
          </div>
        </div>
      </div>
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
