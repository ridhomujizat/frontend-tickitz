import { combineReducers } from 'redux'

import authReducer from './auth'
import orderReducer from './order'

const reducer = combineReducers({
  auth: authReducer,
  order: orderReducer
})

export default reducer
