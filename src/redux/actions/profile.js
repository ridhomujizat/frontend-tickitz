import http from '../../helper/http'

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
export const updateProfile = (token, file) => {
  return async dispatch => {
    const form = new FormData()
    form.append('image', file)
    const response = await http(token).patch('profile', form)
    console.log(response)
    dispatch({
      type: 'GET_PROFILE',
      payload: {
        image: response.data.result.image
      }
    })
    dispatch({
      type: 'LOGIN',
      payload: { image: response.data.result.image }
    })
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
