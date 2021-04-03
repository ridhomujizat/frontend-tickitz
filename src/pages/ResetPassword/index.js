import React, { Component } from 'react'
import '../SignUp/sign.scss'
import { Row, Col, Form, Spinner, Alert } from 'react-bootstrap'
import InfoSign from '../../layout/InfoSign/InfoSign'
import { LogoPurple } from '../../components/Logo'
import { InputPassword } from '../../components/Form'
import Button from '../../components/Button'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { updateProfile } from '../../redux/actions/profile'

class index extends Component {
  state = {
    isLoading: false,
    isMassage: false,
    token: null
  }

  componentDidMount () {
    const { search } = this.props.location
    if (search.indexOf('?token=') !== -1) {
      const token = search.replace('?token=', '')
      this.setState({ token })
    } else {
      return this.props.history.push('forget-password')
    }
  }

  submitData = async (value) => {
    this.setState({ isLoading: true, isMassage: true })
    const { token } = this.state
    await this.props.updateProfile(token, { password: value.password })
    await this.setState({ isLoading: false })
    if (this.props.auth.message) {
      return this.props.history.push('sign-in?reset=true')
    }

    if (this.props.auth.errorMsg) {
      await this.setState({ isLoading: true })
    }

    setTimeout(() => {
      this.setState({ isMassage: false })
    }, 5000)
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
      errors.msg = 'New password & repeat password not same'
    }
    return errors
  }

  render () {
    const order = [
      'Fill your complete email',
      'Activate your email',
      'Enter your new password',
      'Done'
    ]
    return (
      <>
        <div>
          <div id='sign' className="container-fluid">
            <Row className='h-100'>
              <InfoSign
                heading='Lets reset your password'
                text='To be able to use your account again, please complete the following steps.'
                order={order}
                activeNumber={2}
              />

              <Col sm={5} className='form-sign py-sm-5 py-lg-auto'>
                <Row className='justify-content-center logo-mobile my-5'>
                  <Col xs={9}>
                    <LogoPurple size={'25px'} />
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3'>
                  <Col xs={9}>
                    <h2 className='h4'>Enter your new password</h2>
                  </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                  <Col xs={9} className='mt-3'>
                    <Formik
                      initialValues={{ password: '', validPassword: '' }}
                      validate={(values) => this.passwordValidation(values)}
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
                          <InputPassword
                            name='password'
                            label={'New Password'}
                            placeholder={'Write Your New Password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <InputPassword
                            name='validPassword'
                            label={'Validate Password'}
                            placeholder={'Validate Your New Password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.validPassword}
                          />
                          {touched && errors.msg &&
                            <div className="error-message" style={{ color: 'red' }}>{errors.msg}</div>
                          }
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
                              disabled={!isValid || values.email === ''}
                            >
                              Active now
                            </Button>}

                        </Form>
                      )}
                    </Formik>
                  </Col>
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
const mapDispatchToProps = { updateProfile }

export default connect(mapStateToProps, mapDispatchToProps)(index)
