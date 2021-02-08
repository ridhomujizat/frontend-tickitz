import React, { Component } from 'react'
import '../SignUp/sign.scss'
import { Row, Col, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import InfoLogin from '../../layout/InfoSign/infoLogin'
import { LogoPurple } from '../../components/Logo'
import { InputText, InputPassword } from '../../components/Form'
import Button from '../../components/Button'
import fb from '../../assets/images/logo/Facebook.jpg'
import google from '../../assets/images/logo/google.png'

import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  submitData = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.login(email, password)
  }
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return (
      <>
        <div id='sign' className="container-fluid">
          <Row className='h-100'>
            <InfoLogin />
            <Col sm={5} className='form-sign py-sm-5 py-lg-auto'>
              <Row className='justify-content-center logo-mobile my-5'>
                <Col xs={9}>
                  <LogoPurple size={'25px'} />
                </Col>
              </Row>
              <Row className='justify-content-center mb-3'>
                <Col xs={9}>
                  <h2 className='h1'>Sign In</h2>
                  <p className='sign-p'>
                    Sign in with your data that you entered during your
                    registration
                    </p>
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
                    {this.props.auth.errorMsg !== '' && <Alert variant="danger">{this.props.auth.errorMsg}</Alert>}
                    <Button
                      className='btn-primary w-100 py-3 mb-4'
                      type='submit'
                    >
                      Sign In
                      </Button>
                  </Form>
                </Col>
              </Row>
              <Row className='justify-content-center text-center'>
                <Col className='mt-1'>
                  <p>
                    Forgot your password?
                      <Link to='/forget-password'>Reset now</Link>
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
                    <img src={fb} alt='' />
                    <span> Facebook</span>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
