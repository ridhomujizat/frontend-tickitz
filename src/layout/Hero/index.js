import React, { Component } from 'react'
import './index.scss'
import { Image, Container, Col, Row } from 'react-bootstrap'

import spiderman from '../../assets/images/hero/spiderman.png'
import lion from '../../assets/images/hero/lion.png'
import pience from '../../assets/images/hero/peince.png'

class Hero extends Component {
  render () {
    return (
      <div id='hero'>
        <Container className='h-100'>
          <Row className='h-100'>
            <Col sm={12} md={6} className='m-auto '>
              <h1 className='mt-5 mt-lg-0 mx-4'>
                Nearest Cinema, Newest Movie,
                <br />
                <span className='h2'> Find out now! </span>
              </h1>
            </Col>
            <Col sm={12} md={6} className='text-center '>
              <Row className='h-100 '>
                <Row className='hero-content-img  m-auto'>
                  <Col className='img-hero mt-5'>
                    <Image src={spiderman} />
                  </Col>
                  <Col className='img-hero mt-3'>
                    <Image src={lion} />
                  </Col>
                  <Col className='img-hero'>
                    <Image src={pience} />
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Hero
