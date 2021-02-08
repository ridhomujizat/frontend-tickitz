import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './router/Routes'
import ScrollToTop from './router/ScrollToTop'

import { Provider } from 'react-redux'
import persistedStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import PrivateRoute from './router/PrivateRoute'
import Profile from './pages/Profile'

import PublicRoute from './router/PublicRoute'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import Payment from './pages/Payment'
import Ticket from './pages/Ticket'
import AdminMovie from './pages/AdminMovie'

export default function App () {
  const { store, persistor } = persistedStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ScrollToTop>
            <Switch>
              <PublicRoute restricted={true} component={Login} path='/login' />
              <PublicRoute restricted={true} component={SignUp} path='/sign-up' />
              <PublicRoute restricted={true} component={ForgetPassword} path='/forget-password' />
              <PrivateRoute role={'USER'} component={Payment} path='/payment/:id' />
              <PrivateRoute role={'USER'} component={Profile} path='/profile' />
              <PrivateRoute role={'USER'} component={Ticket} path='/result-ticket/:id' />
              <PrivateRoute role={'ADMIN'} component={AdminMovie} path='/admin/:id' />

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
      </PersistGate>
    </Provider>
  )
}
