
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, role, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (auth.token) {
        return <Component {...props} />
      } else if (auth.token && auth.role === 'ADMIN' && role === 'ADMIN') {
        return <Component {...props} />
      } else {
        return <Redirect to='/sign-in' />
      }
    }} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
