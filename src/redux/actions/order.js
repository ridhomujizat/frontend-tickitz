import http from '../../helper/http'

export const selectTime = (payload) => {
  return ({
    type: 'CHOOSE_SCHEDULE',
    payload
  })
}
export const selectSeat = (payload) => {
  return ({
    type: 'SELECT_SEAT',
    payload
  })
}
export const removeSeat = (payload) => {
  return ({
    type: 'REMOVE_SEAT',
    payload
  })
}
export const createTransaction = (token, data) => {
  return async dispatch => {
    const {
      idSchedule,
      seatSelected,
      title,
      total
    } = data
    const params = new URLSearchParams()
    params.append('idSchedule', idSchedule)
    params.append('seatSelected', seatSelected)
    params.append('title', title)
    params.append('total', total)
    try {
      const response = await http(token).post('transaction', params)
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: response.data.results[0].id
      })
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'TRANSACTION_MSG',
          payload: message
        })
      } else {
        dispatch({
          type: 'TRANSACTION_MSG',
          payload: 'Cant connect to server'
        })
      }
    }
  }
}
export const updateTransaction = (token, id, data) => {
  return async dispatch => {
    const {
      email,
      phone,
      name
    } = data
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('phone', phone)
    params.append('name', name)
    try {
      const response = await http(token).patch(`transaction/${id}`, params)
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: response.data.results[0].id
      })
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'TRANSACTION_MSG',
          payload: message
        })
      } else {
        dispatch({
          type: 'TRANSACTION_MSG',
          payload: 'Cant connect to server'
        })
      }
    }
  }
}
