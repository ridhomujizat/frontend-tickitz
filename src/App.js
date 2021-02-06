import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './router/Routes'
import ScrollToTop from './router/ScrollToTop'

import { Provider } from 'react-redux'
import store from './redux/store'

import PrivateRoute from './router/PrivateRoute'
import Profile from './pages/Profile'

import PublicRoute from './router/PublicRoute'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import Payment from './pages/Payment'
import Ticket from './pages/Ticket'

export default function App () {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Switch>
            <PublicRoute restricted={true} component={Login} path='/login' />
            <PublicRoute restricted={true} component={SignUp} path='/sign-up' />
            <PublicRoute restricted={true} component={ForgetPassword} path='/forget-password' />
            <PrivateRoute component={Payment} path='/payment/:id' />
            <PrivateRoute component={Profile} path='/profile' />
            <PrivateRoute component={Ticket} path='/result-ticket/:id' />

            {Routes.map((val, key) => (
              <Route
                key={String(key)}
                path={val.route}
                exact={val.isExact}
                component={val.component}
              />
            ))}
          </Switch>
        </ScrollToTop>
      </Router>
    </Provider>
  )
}
