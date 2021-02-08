import React, { Component } from 'react'
import './index.scss'

import { Row, Col, Form, Alert } from 'react-bootstrap'
import Buttom from '../../components/Button'
import { InputNumber, InputText } from '../../components/Form'

import { connect } from 'react-redux'
import { postProfile } from '../../redux/actions/profile'

class index extends Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null
  }

  submitProfile = () => {
    const { profileAvailable } = this.props.profile
    const { firstName, lastName, phone, email } = this.state
    const { token } = this.props.auth
    const data = {
      firstName, phone, lastName, email
    }
    console.log(data.phone)
    if (!profileAvailable) {
      this.props.postProfile(token, data)
    }
  }

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render () {
    const { firstName, lastName, phone, profileAvailable, message } = this.props.profile
    const { email } = this.props.auth

    return (
      <>
        <Row>
          <Col xs={12}>
            {!profileAvailable ? <Alert variant='warning'>{message}</Alert> : ''}
          </Col>
        </Row>
        <div className='details-information mb-4 mt-2'>
          <Row>
            <h6>Details Information</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Row>
                <Form className='row g-3'>
                  <Col xs={12} md={6}>
                    <InputText
                      label={'First Name'}
                      name='firstName'
                      type={'text'}
                      placeholder={'Your First Name'}
                      defaultValue={profileAvailable ? `${firstName}` : null}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputText
                      label={'Last Name'}
                      name='lastName'
                      type={'text'}
                      placeholder={'Your Last Name'}
                      defaultValue={lastName}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputText
                      label={'Email'}
                      name='email'
                      type={'email'}
                      placeholder={'Your Email'}
                      defaultValue={email}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputNumber
                      label={'Phone Number'}
                      name='phone'
                      placeholder={'Your Phone Number'}
                      defaultValue={phone}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Col>
                </Form>
              </Row>
            </Col>
          </Row>
        </div>

        <div className='details-information mb-4'>
          <Row className='row'>
            <h6>Change Password</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Form className=' g-3'>
                <Row>
                  <Col xs={12} md={6} className='form-group'>
                    <label htmlFor='exampleFormControlInput1'>New Password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='exampleFormControlInput1'
                      placeholder='Write your password'
                    />
                  </Col>
                  <Col xs={12} md={6} className='form-group '>
                    <label htmlFor='exampleFormControlInput1'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='exampleFormControlInput1'
                      placeholder='Confirm your password'
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>

        <div className='btn-update'>
          <Row>
            <Col xs={12} md={6} className='col-12 col-md-6'>
              <Buttom type='submit' variant='primary' block='true' onClick={this.submitProfile}>
                Update changes
              </Buttom>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

const mapDispatchToProps = { postProfile }

export default connect(mapStateToProps, mapDispatchToProps)(index)
