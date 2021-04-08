import React, { Component } from 'react'
import './index.scss'
import { Row, Col, Dropdown, Spinner } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import star from '../../assets/images/star.svg'

import { connect } from 'react-redux'
import { updateProfile, deleteImage } from '../../redux/actions/profile'
const { REACT_APP_API_URL: API_URL } = process.env

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault()
      onClick(e)
    }}
  >
    <BsThreeDots />
  </a>
))

class index extends Component {
  state = {
    isLoading: false,
    success: false,
    message: null
  }

  uploadImage = async (value) => {
    const FILE_SIZE = 500 * 1024
    const SUPPORTED_FORMATS = [
      'image/jpg',
      'image/jpeg',
      'image/gif',
      'image/png'
    ]
    const { token } = this.props.auth
    if (FILE_SIZE < value.size) {
      await this.setState({ message: 'File to large', success: false })
    } else if (SUPPORTED_FORMATS.indexOf(value.type) === -1) {
      await this.setState({ message: 'File not compatibel', success: false })
    } else {
      this.setState({ isLoading: true })
      await this.props.updateProfile(token, { image: value })
      this.setState({ isLoading: false, message: 'Update profile succesfully', success: true })
    }
    setTimeout(() => {
      this.setState({ isMassage: false, message: null })
    }, 2000)
  }

  deleteImage = async () => {
    const { token } = this.props.auth
    this.setState({ isLoading: true })
    await this.props.deleteImage(token)
    this.setState({ isLoading: false, message: 'Update profile succesfully', success: true })
    setTimeout(() => {
      this.setState({ isMassage: false, message: null })
    }, 2000)
  }
  triggerInputFile = () => {
    console.log('lol')
    this.fileInput.click()
  }

  render () {
    const { name, image, lastName } = this.props.auth
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
                <Dropdown >
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {null}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" onClick={() => this.triggerInputFile()}>Change Picture</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => this.deleteImage()} disabled={image && 'uploads/profile/profile-default.jpg'}>Delete Picture</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </p>
            </Col>
            <Col xs={12} className='text-center  my-3'>
              <div className='photo-profile'>
                <div className="upload">
                  {this.state.isLoading
                    ? <Spinner animation="grow" variant="primary" className='spinner' />
                    : <img src={`${API_URL}${image}`} alt='profile user' className='file' />}

                  <input type='file' name='photo' id='upload-photo'
                    onChange={(e) => this.uploadImage(e.target.files[0])}
                    ref={fileInput => { this.fileInput = fileInput }}
                  />
                </div>
              </div>
              {this.state.message && (
                <p className={this.state.success ? 'text-success' : 'text-error'}>{this.state.message}</p>
              )}
              <h5 className='my-3'>{name} {lastName}</h5>
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
  auth: state.auth
})

const mapDispatchToProps = { updateProfile, deleteImage }

export default connect(mapStateToProps, mapDispatchToProps)(index)
