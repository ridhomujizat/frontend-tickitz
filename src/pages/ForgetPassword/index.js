import React, { Component } from 'react'
import '../SignUp/sign.scss'
import { Row, Col, Form, Spinner, Alert } from 'react-bootstrap'
import InfoSign from '../../layout/InfoSign/InfoSign'
import { LogoPurple } from '../../components/Logo'
import { InputText } from '../../components/Form'
import Button from '../../components/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { forgetPass } from '../../redux/actions/auth'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required')
})

class index extends Component {
  state = {
    isLoading: false,
    isMassage: false
  }

  submitData = async (value) => {
    this.setState({ isLoading: true, isMassage: true })
    await this.props.forgetPass(value.email)
    await this.setState({ isLoading: false })
    setTimeout(() => {
      this.setState({ isMassage: false })
    }, 5000)
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
                    <h2 className='h4'>Fill your complete email</h2>
                    <p className='sign-p'>
                      we&apos;ll send a link to your email shortly
                    </p>
                  </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                  <Col xs={9} className='mt-3'>
                    <Formik
                      initialValues={{ email: '' }}
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
const mapDispatchToProps = { forgetPass }

export default connect(mapStateToProps, mapDispatchToProps)(index)
