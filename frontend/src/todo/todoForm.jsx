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
          onClick={
            todo.gender !== 'GIRL' ?
            () => props.setBoyName(todo) :
            () => props.setGirlName(todo)
          }
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
          onClick={
            todo.gender !== 'GIRL' ?
            () => props.toggleChangeBoy() :
            () => props.toggleChangeGirl()
          }
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
            </ul>
          </div>
        </div>
      </div>



      <div className={`raffle-floater__shadow ${ props.showShadow }`}></div>
      <div className={`raffle-floater ${ props.showConfirm }`}>
        <span className="raffle-floater__close"
        onClick={props.hideConfirmBox}
        >X</span>
        <p className="raffle-floater__title">EU ACHO QUE É ...</p>
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

      <div className={`raffle-confirmed__box ${ props.showSuccess }`}>
        <div className="raffle-confirmed">
          <h1 className="raffle-confirmed__success">Sucesso!</h1>
          <p className="raffle-confirmed__text">
            Obrigado por participar da brincadeira,
            esperamos que vc tenha acertado =)
          </p>
        </div>
        <span className='raffle__image'></span>
      </div>
    </span>
  )
}
