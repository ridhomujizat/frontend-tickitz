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
        payload: null
      })
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: null
      })
      const result = await http().post('login', params)
      const token = decodeToken(result.data.token)
      const resultProfile = await http(result.data.token).get('profile')
      const profile = resultProfile.data.results

      dispatch({
        type: 'LOGIN',
        payload: {
          token: result.data.token,
          name: profile.firstName === null ? 'Tickitzer' : profile.firstName,
          lastName: profile.lastName === null ? '' : profile.lastName,
          image: profile.image === null ? 'uploads/profile/profile-default.jpg' : profile.image,
          phone: profile.phone === null ? '' : profile.phone,
          role: token.role,
          email: email
        }
      })
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: message
        })
      } else {
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: 'Cant connect to server'
        })
      }
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
        payload: null
      })
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: null
      })
      const response = await http().post('register?device=web-app', params)
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: response.data.message
      })
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: message
        })
      } else {
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: 'Cant connect to server'
        })
      }
    }
  }
}

export const forgetPass = (email) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    try {
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: null
      })
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: null
      })
      const response = await http().post('forget-password?device=web-app', params)
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: response.data.message
      })
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: message
        })
      } else {
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: 'Cant connect to server'
        })
      }
    }
  }
}
