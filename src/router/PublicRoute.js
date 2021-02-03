
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ component: Component, restricted, auth, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      auth.token && restricted
        ? <Redirect to='/' />
        : <Component {...props} />
    )} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PublicRoute)
