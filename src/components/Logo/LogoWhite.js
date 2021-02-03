import React, { Component } from 'react'
import logoWhite from '../../assets/images/logo/tickitz-white.png'
import { Link } from 'react-router-dom'

export default class LogoWhite extends Component {
  render () {
    return (
      <Link to='/'>
        <img
          src={logoWhite}
          style={{ height: this.props.size, width: 'auto' }}
          alt='Tickitz'
        />
      </Link>
    )
  }
}
