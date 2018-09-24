import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <li className={
        todo.done ? 'raffle__selected' : ''}
        key={todo._id}
        onClick={
            ()=>{ props.handleSetStorage(todo);
            ()=> props.handleGetStorage(todo)
          }
        }
        >
        <span className="raffle__effect"></span>
        <label htmlFor={todo.description}>
          <p className="raffle__name">{todo.description}</p>
          <small className="raffle__familiar">{todo.parent ? todo.parent : 'vazio'}</small>
        </label>
        <input
          className="raffle__radio"
          type="radio"
          id={todo.description}
          value={todo.description}
          name="boyName">
        </input>
        <span></span>
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
              {renderRows()}
              {/*
              <li className='raffle__select' >
                <span className="raffle__effect"></span>
                <label htmlFor='EDUARDO'>
                  <p className="raffle__name">EDUARDO</p>
                  <small className="raffle__familiar">Livia Patrezze</small>
                </label>
                <input
                  id='EDUARDO'
                  className="raffle__radio"
                  placeholder='task here'
                  value={'EDUARDO'}
                  onChange={props.handleChange}
                  onKeyUp={keyHandler}
                  type="radio"
                  name="boyName"
                  >
                </input>
              </li>
              */}
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
              {props.hand}
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
