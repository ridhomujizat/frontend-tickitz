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

    if (firstName) {
      form.append('phone', firstName)
    }
    if (lastName) {
      form.append('phone', lastName)
    }
    if (phone) {
      form.append('phone', String(phone))
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

export const postProfile = (token, data) => {
  return async dispatch => {
    const {
      firstName,
      lastName,
      phone
    } = data
    const params = new URLSearchParams()
    params.append('firstName', firstName)
    params.append('lastName', lastName)
    params.append('phone', phone)
    try {
      const response = await http(token).post('profile', params)
      console.log(response)

      dispatch({
        type: 'CREATE_PROFILE',
        payload: response.data.results

      })
      dispatch({
        type: 'CREATE_PROFILE_AUTH',
        payload: response.data.results[0].firstName
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
          message: message
        }
      })
    }
  }
}

// export const updateProfile = (token, file) => {
//   return async dispatch => {
//     const {
//       firstName,
//       lastName,
//       phone
//     } = data
//     const params = new URLSearchParams()
//     params.append('firstName', firstName)
//     params.append('lastName', lastName)
//     params.append('phone', phone)
//     dispatch({
//       type: 'GET_PROFILE',
//       payload: {
//         image: response.data.result.image
//       }
//     })
//     dispatch({
//       type: 'LOGIN',
//       payload: { image: response.data.result.image }
//     })
//   }
// }
