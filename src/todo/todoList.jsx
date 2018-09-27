import React from 'react'

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

  return (
    <div className="raffle__wrapper-genders">
      <div className="raffle__wrapper-boy">
        <ul>
        {renderRows()}
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
  )
}
