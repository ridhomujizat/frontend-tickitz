import http from '../../helper/http'
import { decodeToken } from 'react-jwt'

export const login = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: ''
      })
      const result = await http().post('login', params)
      const token = decodeToken(result.data.token)

      try {
        const resultProfile = await http(result.data.token).get('profile')
        dispatch({
          type: 'LOGIN',
          payload: {
            token: result.data.token,
            name: resultProfile.data.results.firstName,
            lastName: resultProfile.data.results.lastName,
            image: resultProfile.data.results.image,
            role: token.role,
            email: email
          }
        })
      } catch (err) {
        dispatch({
          type: 'LOGIN',
          payload: {
            token: result.data.token,
            role: token.role,
            email: email
          }
        })
      }
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: message
      })
    }
  }
}

export const register = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: ''
      })
      const result = await http().post('register', params)
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: result.data.message
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: message
      })
    }
  }
}
