import React, { Component } from 'react'
import './index.scss'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Moment from 'react-moment'
import seat from '../../helper/seatType'

import { connect } from 'react-redux'
import { selectSeat, removeSeat, createTransaction } from '../../redux/actions/order'
import http from '../../helper/http'
// import { Link } from 'react-router-dom'

class Index extends Component {
  state = {
    sold: []
  }
  async componentDidMount () {
    const response = await http().get(`/transaction/seat/${this.props.order.idSchedule}`)
    this.setState({
      sold: response.data.result.map(item => item.seatSelected)
    })
  }
  chooseSeat = (event) => {
    const seat = event.target.id
    const { seatSelected } = this.props.order
    if (this.state.sold.indexOf(seat) === -1) {
      if (seatSelected.indexOf(seat) === -1) {
        return this.props.selectSeat({ seat })
      }
      return this.props.removeSeat({ seat })
    }
  }
  orderResult = () => {
    const { idTransaction } = this.props.order
    this.props.history.push(`/payment/${idTransaction}?statusPayment=pending`)
  }

  createTransaction = async () => {
    const data = this.props.order
    const token = this.props.auth.token
    await this.props.createTransaction(token, data)
    await this.orderResult()
  }

  render () {
    const {
      title,
      cinemaName,
      imageCinema,
      price,
      date,
      seatSelected,
      time,
      total
    } = this.props.order
    return (
      <>
        <Header />
        <div id='order-page'>
          <Container className='py-5'>
            <Row>
              <Col xs={12} md={8}>
                <div className='movie-title mb-5'>
                  <h5>Movie Selected</h5>
                  <div className='d-flex flex-row justify-content-between title my-4 align-items-center'>
                    <h5>{title}</h5>
                    <Button
                      type='button'
                      className='btn change-movie btn-secondary'
                    >
                      Change movie
                    </Button>
                  </div>
                </div>

                <div className='seat-cinemas'>
                  <h5>Choose Your Seat</h5>
                  <div className='your-seat'>
                    <Row className='d-flex justify-content-center'>
                      <div className='cinema-studio'>
                        <Row className='justify-content-center screen'>
                          <p>Screen</p>
                        </Row>
                        {seat.map((item, index) => {
                          return (
                            <div className='row-seat' key={String(index)}>
                              <div className='col-seat d-flex flex-row' >
                                <div className='seating-key-col'>
                                  <p>{item[0].id.slice(0, 1)}</p>
                                </div>
                                {item.map(item => {
                                  const className = []
                                  className.push(item.class)
                                  if (seatSelected.indexOf(item.id) > -1) {
                                    className.push('selected')
                                  } else if (seatSelected.indexOf(item.id) === -1) {
                                    const index = className.indexOf('selected')
                                    if (index > -1) {
                                      className.splice(index, 1)
                                    }
                                  }
                                  if (this.state.sold.indexOf(item.id) > -1) {
                                    className.push('sold')
                                  }
                                  return (
                                    <div
                                      key={String(item.id)}
                                      id={item.id}
                                      className={className.join(' ')}
                                      onClick={this.chooseSeat}
                                    ></div>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                        <div className='row-seat'>
                          <div className='col-seat d-flex flex-row'>
                            <div className='seating-key-col'></div>
                            {[...Array(14)].map((item, index) => {
                              if (index + 1 === 8) {
                                return (
                                  <div className='space'></div>
                                )
                              }
                              return (
                                <div className='seat-key-row' key={String(index)}>
                                  <p>{index + 1}</p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div className='your-seat-info my-5'>
                        <Row>
                          <Col>
                            <h6>Seating key</h6>
                          </Col>
                        </Row>
                        <Row className='info-mobile'>
                          <Col xs={12} className='d-flex flex-row flex-wrap'>
                            <div className='info seat-mobile d-flex flex-row align-items-center m-1 mr-5'>
                              <AiOutlineArrowDown />
                              <p>A-G</p>
                            </div>
                            <div className='info seat-mobile d-flex flex-row align-items-center'>
                              <AiOutlineArrowUp />
                              <p>1-14</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} className='d-flex flex-row flex-wrap'>
                            <div className='info d-flex flex-row align-items-center m-1'>
                              <div className='seat availble'></div>
                              <p>Availabele</p>
                            </div>
                            <div className='info d-flex flex-row align-items-center'>
                              <div className='seat selected'></div>
                              <p>Selected</p>
                            </div>
                            <div className='info d-flex flex-row align-items-center'>
                              <div className='seat love-nest'></div>
                              <p>Love nest</p>
                            </div>
                            <div className='info d-flex flex-row align-items-center'>
                              <div className='seat sold'></div>
                              <p>sold</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className='seat-choose-mobile my-4'>
                  <Form action=''>
                    <Row className='form-group '>
                      <Col xs={6}>
                        <Form.Control as='select'>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                          <option>E</option>
                        </Form.Control>
                      </Col>
                      <Col xs={6}>
                        <Form.Control as='select'>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Col>
                    </Row>
                  </Form>
                  <Button
                    variant='outline-primary'
                    block={true}
                    role='button'
                    type='submit'
                  >
                    Add new seat
                  </Button>
                </div>

                <div className='btn-checkout d-flex justify-content-between flex-wrap my-4'>
                  <Button
                    variant={'outline-primary'}
                    className='btn-change-movie'
                    role='button'
                    onClick={this.orderResult}
                  >
                    Change your movie
                  </Button>
                  <Button
                    variant='primary'
                    onClick={() => this.createTransaction()}
                  >
                    checkout
                  </Button>
                </div>
              </Col>

              <Col xs={12} md={4} className='mobile-orderpage'>
                <h5>Order Info</h5>
                <div className='order-info'>
                  <div className='text-center'>
                    <img src={imageCinema} alt='' />
                    <h5>{cinemaName}</h5>
                  </div>
                  <Row className='d-flex justify-content-between mt-4'>
                    <p>Movie selected</p>
                    <h6>{title}</h6>
                  </Row>
                  <Row className='d-flex justify-content-between'>
                    <p><Moment format='LL'>{date}</Moment></p>
                    <h6>{time.slice(0, 5)}</h6>
                  </Row>
                  <Row className='d-flex justify-content-between'>
                    <p>One ticket price</p>
                    <h6>Rp {price}</h6>
                  </Row>
                  <Row className='r-flex justify-content-between'>
                    <p>Seat choosed</p>
                    <h6>{this.props.order.seatSelected.join(', ')}</h6>
                  </Row>
                  <hr />
                  <Row className='d-flex justify-content-between total align-items-center'>
                    <h6>Total Payment</h6>
                    <p>{total}</p>
                  </Row>
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
  order: state.order,
  auth: state.auth
})
const mapDispatchToProps = { selectSeat, removeSeat, createTransaction }
export default connect(mapStateToProps, mapDispatchToProps)(Index)
