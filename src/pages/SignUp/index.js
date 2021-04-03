import React, { Component } from 'react'
import './sign.scss'
import { Row, Col, Form, Alert, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InfoSign from '../../layout/InfoSign/InfoSign'
import { LogoPurple } from '../../components/Logo'
import { InputText, InputPassword } from '../../components/Form'
import Button from '../../components/Button'
import Fb from '../../assets/images/logo/Facebook.jpg'
import google from '../../assets/images/logo/google.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { register } from '../../redux/actions/auth'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(8, '*Password must have at least 8 characters')
    .required('*Password is required')
})

class index extends Component {
  state = {
    isLoading: false,
    isMassage: false
  }

  submitData = async (value) => {
    const { email, password } = value
    this.setState({ isLoading: true, isMassage: true })
    await this.props.register(email, password)
    await this.setState({ isLoading: false })
    setTimeout(() => {
      this.setState({ isMassage: false })
    }, 5000)
  }

  render () {
    const order = [
      'Fill your additional details',
      'Activate your account',
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
                activeNumber={0}
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
                          isValid,
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
                          <Form.Group>
                            <Form.Check
                              type="checkbox"
                              label="I agree to terms & conditions"
                              required
                            />
                          </Form.Group>
                          {this.props.auth.message && this.state.isMassage
                            ? <Alert variant="success">{this.props.auth.message}</Alert>
                            : null}
                          {this.props.auth.errorMsg && this.state.isMassage
                            ? <Alert variant="danger">{this.props.auth.errorMsg}</Alert>
                            : null}
                          {this.state.isLoading
                            ? <div className='btn-loading'><Spinner animation="border" variant="primary" /></div>
                            : <Button
                              className='btn-primary w-100 py-3 mb-4'
                              type='submit'
                              disabled={!isValid || values.email === '' || values.password === ''}
                            >
                              Join for free now
                            </Button>}

                        </Form>
                      )}
                    </Formik>

                  </Col>
                </Row>
                <Row className='justify-content-center text-center'>
                  <Col className='mt-1'>
                    <p>
                      Do you already have an account?
                      <Link to='/sign-in'> Log in</Link>
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
