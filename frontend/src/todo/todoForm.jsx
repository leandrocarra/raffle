import React from 'react'
import IconButton from '../template/iconButton'


export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (

      <li className={
        todo.done ? 'raffle__selected' : ''}
        key={todo._id}
        >
        <span className="raffle__effect"></span>
        <label htmlFor={todo.description}
          onClick={ ()=> props.setGirlName(todo)}
        >
          <p className="raffle__name">{todo.description}</p>
          <small className="raffle__familiar">{todo.parent ? todo.parent : ''}</small>
        </label>
        <input
          className="raffle__radio"
          type="radio"
          id={todo.description}
          onChange={props.handleChange}
          value={todo.description}
          name={todo.gender}
        >
        </input>
        <span></span>
      </li>
    ))

  }

  return (
    <span>
      <div className="raffle__wrapper">
        <div className="raffle__wrapper-genders">
          <div className="raffle__wrapper-boy">
            <ul>
              {renderRows()}
              {/* <li className='raffle__select' >
                <span className="raffle__effect"></span>
                <label htmlFor='VITORIA'>
                  <p className="raffle__name">VITORIA</p>
                  <small className="raffle__familiar">Livia Patrezze</small>
                </label>
                <input
                  id='VITORIA'
                  className="raffl__radio"
                  placeholder='task here'
                  value={'VITORIA'}
                  onChange={props.handleChange}
                  type="radio"
                  name="VITORIA"
                >
                </input>
              </li> */}
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
              {props.boyName}
          </div>
          <div className="raffle-floater__confirm-girl">
              {props.girlName}
          </div>
        </div>
        <IconButton
            style='raffle-floater__confirm-button'
            onClick={props.handleAddParent}
            >
        </IconButton>
      </div>
    </span>
  )
}
