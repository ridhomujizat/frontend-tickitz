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
      }
      dispatch({
        type: 'SET_MOVIE',
        payload: {
          movie: response.data.pageInfo
        }
      })
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
export const getScjedule = (slug, cond) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MESAGGE_NULL'
      })
      const query = cond
        ? qs.stringify({ ...cond })
        : ''
      dispatch({
        type: 'SET_MESSAGE_NULL'
      })
      const response = await http().get(`/schedule/?slug=${slug}&${query}`)
      dispatch({
        type: 'SET_SCHEDULE',
        payload: response.data.results.cinema
      })
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
