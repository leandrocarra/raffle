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
        <label htmlFor={todo.description} onClick={ ()=> props.setBoyName(todo)}>
          <p className="raffle__name">{todo.description}</p>
          <small className="raffle__familiar">{todo.parent ? todo.parent : 'vazio'}</small>
        </label>
        <input
          className="raffle__radio"
          type="radio"
          id={todo.description}
          onChange={props.handleChange}
          value={todo.description}
          name="boyName">
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
               {/*<li className='raffle__select' >*/}
                {/*<span className="raffle__effect"></span>*/}
                {/*<label htmlFor='dddd'>*/}
                  {/*<p className="raffle__name">dddd</p>*/}
                  {/*<small className="raffle__familiar">Livia Patrezze</small>*/}
                {/*</label>*/}
                {/*<input*/}
                  {/*id='dddd'*/}
                  {/*className="raffl__radio"*/}
                  {/*placeholder='task here'*/}
                  {/*value={'dddd'}*/}
                  {/*onChange={props.handleChange}*/}
                  {/*type="radio"*/}
                  {/*name="boyName"*/}
                  {/*>*/}
                {/*</input>*/}
              {/*</li>*/}
              {/*<li className='raffle__select' >*/}
                {/*<span className="raffle__effect"></span>*/}
                {/*<label htmlFor='ffff'>*/}
                  {/*<p className="raffle__name">ffff</p>*/}
                  {/*<small className="raffle__familiar">Livia Patrezze</small>*/}
                {/*</label>*/}
                {/*<input*/}
                  {/*id='ffff'*/}
                  {/*className="raffl__radio"*/}
                  {/*placeholder='task here'*/}
                  {/*value={'ffff'}*/}
                  {/*onChange={props.handleChange}*/}
                  {/*type="radio"*/}
                  {/*name="girlName"*/}
                {/*>*/}
                {/*</input>*/}
              {/*</li>*/}
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
       {/*<div className="raffle-floater__shadow"></div>*/}
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
            onClick={props.handleAdd}
            >
        </IconButton>
      </div>
    </span>
  )
}
