import React, { Component } from 'react'
import logoPurple from '../../assets/images/logo/tickitz-purple.png'
import { Link } from 'react-router-dom'

export default class LogoWhite extends Component {
  render () {
    return (
      <Link to='/'>
        <img
          src={logoPurple}
          style={{ height: this.props.size, width: 'auto' }}
          alt='Tickitz'
        />
      </Link>
    )
  }
}
