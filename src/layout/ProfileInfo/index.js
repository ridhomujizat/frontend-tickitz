import React, { Component } from 'react'
import './index.scss'
import { Row, Col } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import star from '../../assets/images/star.svg'

import { connect } from 'react-redux'
import { updateProfile } from '../../redux/actions/profile'
const { REACT_APP_API_URL: API_URL } = process.env

class index extends Component {
  state = {
    file: null
  }

  uploadImage = async (e) => {
    console.log(e)
    const { token } = this.props.auth
    await this.props.updateProfile(token, e)
  }

  render () {
    const { firstName, image, lastName } = this.props.profile
    return (
      <>
        <div className='profile-content'>
          <Row className='row'>
            <Col
              xs={12}
              className=' d-flex flex-row align-items-center justify-content-between info'
            >
              <h6>INFO</h6>
              <p>
                <BsThreeDots />
              </p>
            </Col>
            <Col xs={12} className='text-center  my-3'>
              <div className='photo-profile'>

                <div className="upload">
                  <label htmlFor='upload-photo'>
                    <img src={image !== 'null' ? `${API_URL}${image}` : `${API_URL}uploads/profile/profile-default.jpg`} alt='profile user' className='file' />
                    <p className="upload-hover"></p>
                  </label>
                  <input type='file' name='photo' id='upload-photo' onChange={(e) => this.uploadImage(e.target.files[0])} />
                </div>
              </div>
              <h5 className='my-3'>{firstName} {lastName}</h5>
              <div className='my-1'>Moviegoers</div>
              <hr />
            </Col>
            <Col xs={12} className='loyalty-point'>
              <h6 className='my-3'>Loyalty Points</h6>
              <div className='card-point'>
                <div className='d-flex flex-row justify-content-between mb-3 content-card'>
                  <div>
                    <h6 className='mb-4'>Moviegoers</h6>
                    <h6>
                      350 <span>points</span>
                    </h6>
                  </div>
                  <img src={star} alt='star' />
                </div>
                <div className='circle'></div>
                <div className='bg-1'>.</div>
                <div className='bg-2'></div>
              </div>
            </Col>
            <Col className=' my-4 text-center'>
              <p>180 points become a master</p>
              <div className='progress' style={{ borderRadius: '20px' }}>
                <div
                  className='progress-bar w-75'
                  role='progressbar'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ borderRadius: '20px' }}
                ></div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

const mapDispatchToProps = { updateProfile }

export default connect(mapStateToProps, mapDispatchToProps)(index)
