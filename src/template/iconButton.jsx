import React from 'react'
import If from './if'

export default props => (
  <If test={!props.hide}>
    <button className={props.style} onClick={props.onClick} type="button">
    JÁ ME DECIDI. É ISSO!
    </button>
  </If>
)
