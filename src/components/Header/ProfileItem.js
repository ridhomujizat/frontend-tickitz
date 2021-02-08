import React, { useState } from 'react'
import './index.scss'
import { withRouter } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

const Profile = (props) => {
  const [show, setShow] = useState(false)
  const showDropdown = (e) => {
    setShow(!show)
  }
  const hideDropdown = e => {
    setShow(false)
  }
  const onClick = (e) => {
    props.history.push(e)
  }
  return (
    <NavDropdown
      title={`Hi ${props.name} !`}
      id='basic-nav-dropdown'
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="profile-name"
    >
      <NavDropdown.Item onClick={() => onClick('/profile')}>
        Profile
      </NavDropdown.Item>
      {props.user === 'ADMIN'
        ? <NavDropdown.Item onClick={() => onClick('/admin/:id')}>
          Dasboard
          </NavDropdown.Item>
        : ''
      }
      <NavDropdown.Item onClick={() => props.dispatch({ type: 'LOGOUT' })}>
        Log Out
    </NavDropdown.Item>
    </NavDropdown >

  )
}

const mapStateToProps = (props) => ({
  auth: props.auth
})

const profileWithRouter = withRouter(Profile)

export default connect(mapStateToProps)(profileWithRouter)
