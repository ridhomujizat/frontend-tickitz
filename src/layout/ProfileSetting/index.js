import React, { Component } from 'react'
import './index.scss'
import { Row, Col, Form, Spinner, Alert } from 'react-bootstrap'
import Button from '../../components/Button'
import { InputNumber, InputText, InputPassword } from '../../components/Form'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { updateProfile } from '../../redux/actions/profile'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, '*First names must have at least 2 characters')
    .max(50, '*First name must be less than 50 characters')
    .required('*First name is required'),
  lastName: Yup.string()
    .min(2, '*Last names must have at least 2 characters')
    .max(50, '*Last name must be less than 50 characters')
    .optional(),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  phone: Yup.string()
    .min(9, '*Phone number must have at least 9 characters')
    .max(15, '*Phone number cant be longer than 15 characters')
    .required('*Phone Number is required')
})

class index extends Component {
  state = {
    isLoading: false,
    messageFor: '',
    message: ''
  }

  passwordValidation (values) {
    const errors = {}
    const { password, validPassword } = values

    if (!password) {
      errors.msg = 'New Password Required'
    } else if (!validPassword) {
      errors.msg = 'Repeat your new password'
    } else if (password.length < 8 || validPassword.length < 8) {
      errors.msg = 'Password have at least 8 characters'
    } else if (password !== validPassword) {
      errors.msg = 'New password & confirm password not same'
    }
    return errors
  }

  submitData = async (form, values) => {
    const { token } = this.props.auth
    await this.setState({ isLoading: form })
    await this.props.updateProfile(token, values)
    this.setState({ isLoading: false })

    if (form === 'info') {
      if (this.props.auth.message) {
        this.setState({ message: this.props.auth.message, messageFor: 'info-succes' })
      }
      if (this.props.auth.errorMsg) {
        this.setState({ message: this.props.auth.errorMsg, messageFor: 'info-danger' })
      }
    } else {
      if (this.props.auth.message) {
        this.setState({ message: this.props.auth.message, messageFor: 'password-succes' })
      }
      if (this.props.auth.errorMsg) {
        this.setState({ message: this.props.auth.errorMsg, messageFor: 'password-danger' })
      }
    }
    setTimeout(() => {
      this.setState({ message: '', messageFor: '' })
    }, 5000)
  }
  render () {
    const { name, lastName, email, phone } = this.props.auth
    return (
      <>
        <div className='details-information mb-4 mt-2'>
          <Row>
            <h6>Details Information</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Formik
                initialValues={{ firstName: name, lastName: lastName, email: email, phone: phone }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  this.submitData('info', values)
                }}
              >
                {(
                  {
                    isValid,
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  }) => (
                  <Row>
                    <Form className='row g-3' onSubmit={handleSubmit}>
                      <Col xs={12} md={6}>
                        <InputText
                          label='First Name'
                          name='firstName'
                          type='text'
                          placeholder='Your first name'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                        {touched.firstName && errors.firstName
                          ? (<div className="error-message" style={{ color: 'red' }}>{errors.firstName}</div>)
                          : null}
                      </Col>
                      <Col xs={12} md={6}>
                        <InputText
                          label='Last Name'
                          name='lastName'
                          type='text'
                          placeholder='Your last name'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                        {touched.lastName && errors.lastName
                          ? (<div className="error-message" style={{ color: 'red' }}>{errors.lastName}</div>)
                          : null}
                      </Col>
                      <Col xs={12} md={6}>
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
                      </Col>
                      <Col xs={12} md={6}>
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
                      </Col>
                      <Col xs={12}>
                        {this.state.messageFor.indexOf('info') !== -1 &&
                          <Alert variant={this.state.messageFor.indexOf('danger') === -1 ? 'success' : 'danger'}>
                            {this.state.message}
                          </Alert>
                        }
                        {this.state.isLoading === 'info'
                          ? <div className='btn-loading'><Spinner animation="border" variant="primary" /></div>
                          : <Button
                            type='submit'
                            variant='primary'
                            block='true'
                            disabled={!isValid || !values.phone}
                          >
                            Update changes
                         </Button>}
                      </Col>
                    </Form>

                  </Row>
                )}
              </Formik>
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
              <Formik
                initialValues={{ password: '', validPassword: '' }}
                validate={(values) => this.passwordValidation(values)}
                onSubmit={(values, { resetForm }) => {
                  resetForm()
                  console.log(values)
                  this.submitData('password', values)
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
                  <Form className=' g-3' onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} md={6} className='form-group'>
                        <InputPassword
                          name='password'
                          label={'New Password'}
                          placeholder={'Write Your New Password'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </Col>
                      <Col xs={12} md={6} className='form-group '>
                        <InputPassword
                          name='validPassword'
                          label={'Confirm Password'}
                          placeholder={'Validate Your New Password'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.validPassword}
                        />
                      </Col>
                    </Row>
                    {touched && errors.msg &&
                      <div className="error-message" style={{ color: 'red' }}>{errors.msg}</div>
                    }
                    {this.state.messageFor.indexOf('password') !== -1 &&
                      <Alert variant={this.state.messageFor.indexOf('danger') === -1 ? 'success' : 'danger'}>
                        {this.state.message}
                      </Alert>
                    }
                    {this.state.isLoading === 'password'
                      ? <div className='btn-loading'><Spinner animation="border" variant="primary" /></div>
                      : <Button
                        type='submit'
                        variant='primary'
                        block='true'
                        disabled={!isValid || !values.password}
                      >
                        Update changes
                         </Button>}
                  </Form>
                )}
              </Formik>
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

const mapDispatchToProps = { updateProfile }

export default connect(mapStateToProps, mapDispatchToProps)(index)
