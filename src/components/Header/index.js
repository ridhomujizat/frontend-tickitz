import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import { LogoPurple } from '../../components/Logo'
import { connect } from 'react-redux'

import dProfile from '../../assets/images/user.jpeg'

class Header extends Component {
  state = {
    isUser: false
  }
  render () {
    const { isUser } = this.state
    return (
      <>
        <div className='fixed-top header'>
          <Container>
            <Navbar expand='lg'>
              <Navbar.Brand>
                <LogoPurple size='900' />
              </Navbar.Brand>
              <Navbar className='navbar-collapse collapse'>
                <Nav className='mr-auto'>
                  <Nav.Link>Movie</Nav.Link>
                  <Nav.Link>Cinemas</Nav.Link>
                  <Nav.Link>Buy Ticket</Nav.Link>
                </Nav>

                <div className='d-flex flex-row justify-content-end navbar-nav-right'>
                  <NavDropdown
                    title='Dropdown'
                    id='basic-nav-dropdown'
                    className='nav-link'
                  >
                    <NavDropdown.Item href='#action/3.1'>
                      Jakarta
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Karawang
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Bandung
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Form inline className='search-box'>
                    <FormControl
                      type='text'
                      placeholder='Search'
                      className='input-search'
                    />
                    <Button className='btn-search'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z'
                          fill='#414141'
                        />
                      </svg>
                    </Button>
                  </Form>
                  {isUser
                    ? (<Link to='/profile' className='user-profile'>
                      <img src={dProfile} alt='User Profile' />
                    </Link>)
                    : (
                      <Link to='/sign-up' className='btn btn-primary btn-sign-up'>
                        Sign Up
                      </Link>)}
                </div>
              </Navbar>

              <Navbar.Toggle aria-controls='nav-mobile'>
                <svg
                  width='16'
                  height='14'
                  viewBox='0 0 16 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1C16 1.26522 15.8946 1.51957 15.7071 1.70711C15.5196 1.89464 15.2652 2 15 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z'
                    fill='black'
                  />
                  <path
                    d='M0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13Z'
                    fill='black'
                  />
                  <path
                    d='M7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6H7Z'
                    fill='black'
                  />
                </svg>
              </Navbar.Toggle>

              <Navbar.Collapse id='nav-mobile' className='nav-mobile-content'>
                <div className='d-flex flex-column align-items-center'>
                  <div className='p-2 mt-4 container nav-mobile-content-search'>
                    <input
                      className='form-control '
                      type='text'
                      placeholder='Search'
                    />
                    <a href='' className='nav-mobile-content-search-icon'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z'
                          fill='#414141'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='hr'></div>
                  <div className='p-2 py-3'>
                    <NavDropdown
                      title='Location'
                      id='basic-nav-dropdown'
                      className='nav-link'
                    >
                      <NavDropdown.Item href='#action/3.1'>
                        Jakarta
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Karawang
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>
                        Bandung
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className='hr'></div>
                  <div className='p-2 py-3'>
                    <a href='#'> Movies</a>
                  </div>
                  <div className='hr'></div>
                  <div className='p-2 py-3'>
                    <a href='#'> CInemax</a>
                  </div>
                  <div className='hr'></div>
                  <div className='p-2 py-3'>
                    <a href='#'> Buy Ticket</a>
                  </div>
                  <div className='hr'></div>
                  <div className='mt-5 p-2 copyrigth'>
                    © 2020 Tickitz. All Rights Reserved.
                  </div>
                  <Navbar.Toggle
                    aria-controls='nav-mobile'
                    className='black-cover'
                  >
                    <div></div>
                  </Navbar.Toggle>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
        <div className='fixed-nav-top'></div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header)
