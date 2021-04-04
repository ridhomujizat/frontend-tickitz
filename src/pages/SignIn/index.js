import React, { Component } from 'react'
import '../SignUp/sign.scss'
import { Row, Col, Form, Alert, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InfoLogin from '../../layout/InfoSign/infoLogin'
import { LogoPurple } from '../../components/Logo'
import { InputText, InputPassword } from '../../components/Form'
import Button from '../../components/Button'
import fb from '../../assets/images/logo/Facebook.jpg'
import google from '../../assets/images/logo/google.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(8, '*Password must have at least 8 characters')
    .required('*Password is required')
})

class Login extends Component {
  state = {
    activated: false,
    isLoading: false,
    isMassage: false,
    isMassageSucces: false
  }
  componentDidMount () {
    if (this.props.location.search) {
      if (this.props.location.search.indexOf('success=true') !== -1) {
        this.setState({ activated: true, isMassageSucces: 'Activate success, you can sign with your account' })
      } else if (this.props.location.search.indexOf('reset=true') !== -1) {
        this.setState({ activated: true, isMassageSucces: 'Reset success, you can sign in with new password' })
      }
      setTimeout(() => {
        this.setState({ isMassageSucces: false })
      }, 5000)
    }
  }
  submitData = async (value) => {
    const { email, password } = value
    this.setState({ isLoading: true })
    await this.props.login(email, password)
    await this.setState({ isLoading: false })
    if (this.props.auth.errorMsg) {
      this.setState({ isMassage: true })
    }
    setTimeout(() => {
      this.setState({ isMassage: false })
    }, 5000)
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
                  <Formik
                    initialValues={{ email: '', password: '' }}
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
                      <Form onSubmit={handleSubmit}>
                        <InputText
                          name='email'
                          label={' Email Address'}
                          type={'email'}
                          placeholder={'Write Your Email'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {touched.email && errors.email
                          ? (<div className="error-message" style={{ color: 'red' }}>{errors.email}</div>)
                          : null}
                        <InputPassword
                          name='password'
                          label={'Password'}
                          placeholder={'Write Your Password'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {touched.password && errors.password
                          ? (<div className="error-message" style={{ color: 'red' }}>{errors.password}</div>)
                          : null}
                        {this.state.activated && this.state.isMassageSucces && <Alert variant="success">
                          {this.state.isMassageSucces}
                        </Alert>}
                        {this.props.auth.errorMsg !== '' && this.state.isMassage && <Alert variant="danger">
                          {this.props.auth.errorMsg}</Alert>}
                        {this.state.isLoading
                          ? <div className='btn-loading'><Spinner animation="border" variant="primary" /></div>
                          : <Button
                            className='btn-primary w-100 py-3 mb-4'
                            type='submit'
                          >
                            Sign In
                            </Button>}

                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
              <Row className='justify-content-center text-center'>
                <Col className='mt-1'>
                  <p>
                    Forgot your password?
                      <Link to='/forget-password'> Reset now</Link>
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
