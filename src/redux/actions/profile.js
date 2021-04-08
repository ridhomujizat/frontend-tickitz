import http from '../../helper/http'

export const updateProfile = (token, data) => {
  return async dispatch => {
    const {
      firstName,
      lastName,
      phone,
      email,
      image,
      password
    } = data
    const form = new FormData()
    console.log(form)
    if (firstName) {
      form.append('firstName', firstName)
    }
    if (lastName) {
      form.append('lastName', lastName)
    }
    if (phone) {
      form.append('phone', phone)
    }
    if (email) {
      form.append('email', email)
    }
    if (password) {
      form.append('password', password)
    }
    if (image) {
      form.append('image', image)
    }
    try {
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: null
      })
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: null
      })
      const response = await http(token).patch('profile', form)
      const profile = response.data.result
      dispatch({
        type: 'LOGIN',
        payload: {
          name: profile.firstName === null ? 'Tickitzer' : profile.firstName,
          lastName: profile.lastName === null ? '' : profile.lastName,
          phone: profile.phone === null ? '' : profile.phone,
          email: profile.email,
          image: response.data.result.image
        }
      })
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
          payload: 'Cant connect with server'
        })
      }
    }
  }
}
export const profile = (token) => {
  return async dispatch => {
    try {
      const response = await http(token).get('profile')
      dispatch({
        type: 'GET_PROFILE',
        payload: response.data.results
      })
      dispatch({
        type: 'MESSAGE',
        payload: {
          profileAvailable: true,
          message: ''
        }
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'MESSAGE',
        payload: {
          profileAvailable: false,
          message: message
        }
      })
    }
  }
}

export const deleteImage = (token) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_LOGIN_MESSAGE',
        payload: null
      })
      dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: null
      })
      const response = await http(token).delete('profile/image')
      dispatch({
        type: 'LOGIN',
        payload: {
          image: 'uploads/profile/profile-default.jpg'
        }
      })
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
          payload: 'Cant connect with server'
        })
      }
    }
  }
}
