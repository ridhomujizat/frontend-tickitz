import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import authReducer from './auth'
import orderReducer from './order'
import profileReducer from './profile'
import movieReducer from './movei'

const authConfig = {
  key: 'authReducer',
  storage,
  stateReconciler: hardSet
}

const reducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  order: orderReducer,
  profile: profileReducer,
  movie: movieReducer
})

export default reducer
