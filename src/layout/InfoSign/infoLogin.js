import React, { Component } from 'react'
import './index.scss'

import { Col } from 'react-bootstrap'
import { LogoWhite } from '../../components/Logo'

export default class infoLogin extends Component {
  render () {
    return (
      <Col sm={7} className='info-sign'>
        <div className='content text-center mx-auto my-auto'>
          <LogoWhite size={'150px'} />

          <h2>wait, watch, wow!</h2>
        </div>
      </Col>
    )
  }
}
