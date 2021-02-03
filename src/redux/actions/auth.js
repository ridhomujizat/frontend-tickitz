import http from '../../helper/http'

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
      console.log(result)
      dispatch({
        type: 'LOGIN',
        payload: result.data.token
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
