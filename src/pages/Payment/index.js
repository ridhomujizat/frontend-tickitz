import React, { Component } from 'react'
import './index.scss'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillWarning } from 'react-icons/ai'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { InputText, InputNumber } from '../../components/Form'
import Button from '../../components/Button'
import gpay from '../../assets/images/peyment-method/g-pay.png'
import dana from '../../assets/images/peyment-method/dana.png'
import bca from '../../assets/images/peyment-method/bca.png'
import bri from '../../assets/images/peyment-method/bri.png'
import gopay from '../../assets/images/peyment-method/gopay.png'
import ovo from '../../assets/images/peyment-method/ovo.png'
import visa from '../../assets/images/peyment-method/visa.png'
import paypal from '../../assets/images/peyment-method/paypal.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import http from '../../helper/http'
import { connect } from 'react-redux'
import { updateTransaction } from '../../redux/actions/order'
import Moment from 'react-moment'
// import { decodeToken } from 'react-jwt'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*First Names must have at least 2 characters')
    .max(50, '*First name must be less than 50 characters')
    .required('*First name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  phone: Yup.string()
    .min(9, '*Phone number must have at least 9 characters')
    .max(15, '*Phone number cant be longer than 10 characters')
    .required('*Phone Number is required')
})

class Index extends Component {
  state = {
    name: '',
    phone: '',
    email: ''
  }
  async componentDidMount () {
    const token = this.props.auth.token
    const { id } = this.props.match.params
    try {
      const responsTransaction = await http(token).get(`transaction/${id}`)
      this.setState({
        ...responsTransaction.data.results
      })
      if (responsTransaction.data.results.status === 'success') {
        return this.props.history.push(`/result-ticket/${id}`)
      }
    } catch (err) {
      this.props.history.push('/')
    }
  }

  submitData = async (value) => {
    const { id } = this.props.match.params
    const { token } = this.props.auth
    await this.props.updateTransaction(token, id, value)
    if (!this.props.erroMsg) {
      this.props.history.push(`/result-ticket/${id}`)
    }
  }

  render () {
    const { title, total, date, time, price, seatSelected } = this.state
    const auth = this.props.auth
    return (
      <>
        <Header />
        <div id='payment'>
          <div className='total-mobile'>
            <Container>
              <Row>
                <Col xs={12}>
                  <Row className='d-flex justify-content-between total align-items-center'>
                    <h6>Total Payment</h6>
                    <p>Rp {total}</p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className=' py-5'>
            <Formik
              initialValues={{ name: `${auth.name} ${auth.lastName}`, email: auth.email, phone: auth.phone }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm()
                this.submitData(values)
              }}
            >
              {(
                {
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                <>
                  <Row>
                    <Col xs={12} md={8}>
                      <div className='order mb-5'>
                        <h5>Payment Info</h5>
                        <div className='order-info'>
                          <Row className='d-flex justify-content-between'>
                            <p><Moment format="LL">{date}</Moment></p>
                            <h6>{time}</h6>
                          </Row>
                          <hr />
                          <Row className='d-flex justify-content-between mt-4'>
                            <p>Movie selected</p>
                            <h6>{title}</h6>
                          </Row>
                          <hr />
                          <Row className='d-flex justify-content-between'>
                            <p>One ticket price</p>
                            <h6>Rp. {price},-</h6>
                          </Row>
                          <hr />
                          <Row className='d-flex justify-content-between'>
                            <p>Seat choosed</p>
                            <h6>{seatSelected}</h6>
                          </Row>
                          <hr />
                          <Row className='d-flex justify-content-between total align-items-center'>
                            <h6>Total Payment</h6>
                            <p>Rp. {total},-</p>
                          </Row>
                        </div>
                      </div>
                      <div className='payment'>
                        <h5>Choose a Payment Method</h5>
                        <div className='payment-method'>
                          <div className='d-flex flex-row flex-wrap justify-content-center'>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={gopay} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={visa} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={gpay} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={paypal} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={dana} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={bca} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={bri} alt='' />
                              </div>
                            </a>
                            <a
                              href=''
                              className='d-flex justify-content-center align-items-center text-center'
                            >
                              <div className='payment-image'>
                                <img src={ovo} alt='' />
                              </div>
                            </a>
                          </div>
                          <div className='div text-center view-more'>
                            <p href='#' id='view-more'>
                              or
                      </p>
                          </div>
                          <div className='offline-payment text-center'>
                            <p>
                              Pay via cash.{' '}
                              <span>
                                <Link to='#'> See how it work </Link>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} md={4} className='col-12 col-md-4'>
                      <h5>Personal Info</h5>
                      <div className='personal-info'>
                        <Form onSubmit={handleSubmit} >
                          <InputText
                            label='Your Name'
                            name='name'
                            type='text'
                            placeholder='Your Name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          {touched.name && errors.name
                            ? (<div className="error-message" style={{ color: 'red' }}>{errors.name}</div>)
                            : null}
                          <InputText
                            label='Email'
                            name='email'
                            type='text'
                            placeholder='Your email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {touched.email && errors.email
                            ? (<div className="error-message" style={{ color: 'red' }}>{errors.email}</div>)
                            : null}
                          <InputNumber
                            label='Phone Number'
                            name='phone'
                            placeholder='Your Phone Number'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                          {touched.phone && errors.phone
                            ? (<div className="error-message" style={{ color: 'red' }}>{errors.phone}</div>)
                            : null}
                          <div className='warning-form d-flex flex-row align-items-center'>
                            <div className='warning-icon'>
                              <AiFillWarning />
                            </div>
                            <div className='warning-text'>
                              <p>Fill your data correctly.</p>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8}>
                      <div className='btn-pay d-flex justify-content-between flex-wrap my-4'>
                        <Button
                          className='btn-previous-step'
                          variant='outline-primary'
                        >
                          Previous Step
                  </Button>
                        <Button
                          variant='primary'
                          onClick={handleSubmit}
                        >
                          Pay your order
                  </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </Formik>
          </Container>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order
})
const mapDispatchToProps = { updateTransaction }
export default connect(mapStateToProps, mapDispatchToProps)(Index)
