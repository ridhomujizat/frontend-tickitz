import React, { Component } from 'react'
import './index.scss'

import { LogoWhite } from '../../components/Logo'
import barcode from '../../assets/images/barcode.png'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlinePrinter, AiOutlineDownload } from 'react-icons/ai'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

export default class index extends Component {
  render () {
    return (
      <>
        <Header />
        <div id='result-ticket'>
          <Container>
            <Row>
              <Col xs={12} className='my-3 my-md-5'>
                <div className='ticket-show'>
                  <h5 className='text-center mb-5'>Proof of Payment</h5>
                  <div className='ticket'>
                    <Row className='heading-ticket'>
                      <Col
                        xs={7}
                        className='px-5 heading-admit-one d-flex align-items-center justify-content-between'
                      >
                        <LogoWhite size={'40px'} />
                        <h6>Admint One</h6>
                      </Col>
                      <Col xs={5} className='heading-barcode text-center'>
                        <img src='./assets/img/tickitz.png' alt='' />
                      </Col>
                    </Row>
                    <Row className='ticket-info'>
                      <Col
                        xs={12}
                        md={7}
                        className='ticket-info-text order-1 order-md-0'
                      >
                        <Row>
                          <Col
                            xs={6}
                            md={12}
                            className='col-6 col-md-12 mb-2 order-0 title'
                          >
                            <p>title</p>
                            <h6>Spider-Man: Homecoming</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-2 order-md-1'
                          >
                            <p>Date</p>
                            <h6>07 July</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-3 order-md-2'
                          >
                            <p>Time</p>
                            <h6>02:00pm</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-1 order-md-3'
                          >
                            <p>Category</p>
                            <h6>PG-13</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-4 order-md-4'
                          >
                            <p>Count</p>
                            <h6>3 pieces</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className='mb-2 order-5 order-md-5'
                          >
                            <p>Seats</p>
                            <h6>C4, C5, C6</h6>
                          </Col>
                          <Col
                            xs={12}
                            md={4}
                            className=' mb-2 order-6 order-md-6 price'
                          >
                            <p id='price-tag'>Price</p>
                            <p id='total-tag'>Total</p>
                            <h6>$30.00</h6>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        xs={12}
                        md={4}
                        className=' ticket-info-barcode order-0 order-md-1'
                      >
                        <Row className='text-center'>
                          <Col className='my-4'>
                            <img src={barcode} alt='' className='img-fluid' />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div className='btn-print-ticket m-4'>
                    <Row className='d-flex justify-content-center'>
                      <Button
                        type='button'
                        variant='outline-secondary'
                        className='m-3 '
                      >
                        <AiOutlineDownload className='mr-2' />
                        Download
                      </Button>
                      <Button
                        type='button'
                        variant='outline-secondary'
                        className='px-4 m-3'
                      >
                        <AiOutlinePrinter className='mr-2' />
                        Print
                      </Button>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    )
  }
}
