import React from 'react'
import If from './if'

export default props => (
  <If test={!props.hide}>
    <button className={props.style} onClick={props.onClick} type="button">
      CONFIRMO
    </button>
  </If>
)
