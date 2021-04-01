import http from '../../helper/http'
import qs from 'querystring'

export const getMovie = (cond) => {
  return async dispatch => {
    try {
      const query = cond
        ? qs.stringify({ ...cond })
        : ''
      dispatch({
        type: 'SET_MESSAGE_NULL'
      })
      const response = await http().get(`movies?${query}`)
      if (cond.status === 'released') {
        dispatch({
          type: 'SET_MOVIE',
          payload: {
            movieNowShowing: response.data.pageInfo
          }
        })
      } else if (cond.status === 'upcoming') {
        dispatch({
          type: 'SET_MOVIE',
          payload: {
            movieUpcoming: response.data.pageInfo
          }
        })
      } else {
        dispatch({
          type: 'SET_MOVIE',
          payload: {
            movie: response.data.pageInfo
          }
        })
      }
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data
        dispatch({
          type: 'SET_MESSAGE',
          payload: message
        })
      } else {
        dispatch({
          type: 'SET_MESSAGE',
          payload: 'Cant connect to server'
        })
      }
    }
  }
}
