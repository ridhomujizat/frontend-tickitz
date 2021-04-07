import React from 'react'
import './index.scss'
import { Button as ButtonBootstrap } from 'react-bootstrap'

function Button (props) {
  return (
    <ButtonBootstrap
      variant={props.variant}
      type={props.type}
      value={props.value}
      block={props.block}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonBootstrap>
  )
}

export default Button
