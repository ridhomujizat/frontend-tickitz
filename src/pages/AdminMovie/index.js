import React, { Component } from 'react'
import './index.scss'
import { Container, Row, Col, Form } from 'react-bootstrap'
import spider from '../../assets/spider-movie.png'
import { InputText, InputLocation, InputDate } from '../../components/Form'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default class index extends Component {
  render () {
    return (
      <>
        <Header />
        <div id='admin'>
          <Container className='py-5'>
            <Row>
              <Col xs={12} md={8}>
                <h5 className='my-2'>Movie Description</h5>
                <div className='movie-descripton mt-2 mb-5'>
                  <Form>
                    <Row>
                      <Col xs={12} md={4} className='text-center'>
                        <img src={spider} alt='test' className='img-fluid' />
                      </Col>

                      <Col xs={12} md={8}>
                        <InputText
                          label={'Movie Name'}
                          type={'text'}
                          placeholder={'Input Movie Name'}
                          name='movieName'
                        />
                        <InputText
                          label={'Category'}
                          type={'text'}
                          placeholder={'Input Category'}
                          name='category'
                        />
                        <Row>
                          <Col xs={6}>
                            <InputText
                              label={'Release date'}
                              type={'date'}
                              name='release'
                            />
                          </Col>
                          <Col xs={3}>
                            <InputText
                              label={'Hours'}
                              type={'number'}
                              name='hour'
                              placeholder={'H'}
                            />
                          </Col>
                          <Col xs={3}>
                            <InputText
                              label={'minute'}
                              type={'number'}
                              name='minute'
                              placeholder={'M'}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}>
                        <Row>
                          <Col xs={12} md={4}>
                            <InputText
                              label={'Direction'}
                              name='direction'
                              placeholder={'Write Direction Movie'}
                              type={'text'}
                            />
                          </Col>
                          <Col xs={12} md={8}>
                            <InputText
                              label={'Casts'}
                              name='Casts'
                              placeholder={'Write Casts Movie'}
                              type={'text'}
                            />
                          </Col>
                        </Row>
                        <InputText
                          as={'textarea'}
                          rows={3}
                          label={'Sysnopsis'}
                          placeholder={'Write a Synopsis'}
                        />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <h5 className='my-2'>Premiere Location</h5>
                <div className='movie-descripton mt-2 mb-5'>
                  <Row>
                    <Col xs={12}>
                      <InputLocation />
                    </Col>
                  </Row>
                </div>
                <h5 className='my-2'>Showtimes</h5>
                <div className='movie-descripton mt-2 mb-5'>
                  <Row>
                    <Col xs={12}>
                      <InputDate />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <h5 className='my-2'>Sales Charts</h5>

                <div className='account-setting mb-3 mt-3 mt-md-0'>
                  <Row>
                    <div className='setting active'>
                      <h6>Based on Movie</h6>
                    </div>
                    <div className='setting'>
                      <h6>Based on Location</h6>
                    </div>
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
