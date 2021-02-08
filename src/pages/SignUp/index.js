import React, { Component } from 'react'
import './sign.scss'
import { Row, Col, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import InfoSign from '../../layout/InfoSign/InfoSign'
import { LogoPurple } from '../../components/Logo'
import { InputText, InputPassword } from '../../components/Form'
import Button from '../../components/Button'
import Fb from '../../assets/images/logo/Facebook.jpg'
import google from '../../assets/images/logo/google.png'

import { connect } from 'react-redux'
import { register } from '../../redux/actions/auth'

class index extends Component {
  state = {
    email: '',
    password: ''
  }

  submitData = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.register(email, password)
    return this.redirectLogin()
  }

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  redirectLogin = () => {
    if (this.props.auth.message) {
      this.props.history.push('/login?success=true')
    }
  }

  render () {
    const order = [
      'Fill your additional details',
      'Fill your additional details',
      'Done'
    ]

    return (
      <>
        <div>
          <div id='sign' className='container-fluid'>
            <Row className='h-100'>
              <InfoSign
                heading='Lets build your account'
                text='
              To be a loyal moviegoer and access all of features, your details
              are required.'
                order={order}
              />

              <Col sm={5} className='form-sign py-sm-5 py-lg-auto'>
                <Row className='justify-content-center logo-mobile my-5'>
                  <Col xs={9}>
                    <LogoPurple size={'25px'} />
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3'>
                  <Col xs={9}>
                    <h2 className='h4'>Fill your additional details</h2>
                  </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                  <Col xs={9} className='mt-3'>
                    <Form onSubmit={this.submitData}>
                      <InputText
                        name='email'
                        label={' Email Address'}
                        type={'email'}
                        placeholder={'Write your email'}
                        onChange={(event) => this.changeText(event)}
                      />
                      <InputPassword
                        name='password'
                        label={'Password'}
                        placeholder={'Write Your Password'}
                        onChange={(event) => this.changeText(event)}
                      />
                      <div className='from-group mb-4'>
                        <label className='form-label ml-2' htmlFor='agree-term-con'>
                          <input
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                          />
                          I agree to terms & conditions
                        </label>
                      </div>
                      {this.props.auth.message !== '' && <Alert variant="success">{this.props.auth.message}</Alert>}
                      {this.props.auth.errorMsg !== '' && <Alert variant="danger">{this.props.auth.errorMsg}</Alert>}
                      <Button
                        className='btn-primary w-100 py-3 mb-4'
                        type='submit'
                      >
                        Join for free now
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row className='justify-content-center text-center'>
                  <Col className='mt-1'>
                    <p>
                      Do you already have an account?
                      <Link to='/login'>Log in</Link>
                    </p>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <div className='col text-center'>
                    <a className='btn btn-login' href='#' role='button'>
                      <img src={google} />
                      <span>Google</span>
                    </a>
                    <a className='btn btn-login' href='#' role='button'>
                      <img src={Fb} alt='' />
                      <span> Facebook</span>
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(index)
