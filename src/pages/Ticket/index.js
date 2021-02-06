import React, { Component } from 'react'
import './index.scss'

import { LogoWhite } from '../../components/Logo'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlinePrinter, AiOutlineDownload } from 'react-icons/ai'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

import http from '../../helper/http'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import QRCode from 'react-qr-code'

class Index extends Component {
  state = {}

  async componentDidMount () {
    const token = this.props.auth.token
    const { id } = this.props.match.params
    console.log(this.props.match)

    const responsTransaction = await http(token).get(`transaction/${id}`)
    this.setState({
      ...responsTransaction.data.results
    })
  }

  render () {
    const { title, total, date, time, seatSelected } = this.state
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
                            <h6>{title}</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-2 order-md-1'
                          >
                            <p>Date</p>
                            <h6><Moment format="ll">{date}</Moment></h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className=' mb-2 order-3 order-md-2'
                          >
                            <p>Time</p>
                            <h6>{time}</h6>
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
                            <h6>{seatSelected} pieces</h6>
                          </Col>
                          <Col
                            xs={6}
                            md={4}
                            className='mb-2 order-5 order-md-5'
                          >
                            <p>Seats</p>
                            <h6>{seatSelected}</h6>
                          </Col>
                          <Col
                            xs={12}
                            md={4}
                            className=' mb-2 order-6 order-md-6 price'
                          >
                            <p id='price-tag'>Price</p>
                            <p id='total-tag'>Total</p>
                            <h6>{total}</h6>
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
                            <QRCode className="ticket-info-barcode" size="110" value={`http://localhost:3000${this.props.match.url}`} />
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

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Index)
