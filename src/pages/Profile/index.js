import React, { Component } from 'react'
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfileInfo from '../../layout/ProfileInfo'
import ProfileSetting from '../../layout/ProfileSetting'
import OrderHistory from '../../layout/ProfileHistory'

import { connect } from 'react-redux'
import { profile } from '../../redux/actions/profile'

class index extends Component {
  state = {
    accountSet: true,
    profileAvailable: false
  }

  changeContent = () => {
    if (this.state.accountSet === true) {
      return this.setState({ accountSet: false })
    }
    return this.setState({ accountSet: true })
  }

  async componentDidMount () {
    const { token } = this.props.auth
    await this.props.profile(token)
  }
  render () {
    const { accountSet, ...data } = this.state
    return (
      <>
        <Header />
        <div id='profile'>
          <Container>
            <Row className='py-5'>
              <Col xs={12} md={4}>
                <ProfileInfo />
              </Col>

              <Col xs={12} md={8}>
                <div className='account-setting mb-3 mt-3 mt-md-0'>
                  <Row>
                    <div
                      className={`setting ${accountSet ? 'active' : ''}`}
                      onClick={this.changeContent}
                    >
                      <h6>Account Settings</h6>
                    </div>
                    <div
                      className={`setting ${accountSet ? '' : 'active'}`}
                      onClick={this.changeContent}
                    >
                      <h6>Order History</h6>
                    </div>
                  </Row>
                </div>

                {accountSet === true ? <ProfileSetting data={data} /> : <OrderHistory />}
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { profile }
export default connect(mapStateToProps, mapDispatchToProps)(index)
