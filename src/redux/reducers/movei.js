const initialstate = {
  movie: null,
  movieNowShowing: {
    totalData: 0,
    currentPage: 0,
    totalPage: 0,
    results: []
  },
  movieUpcoming: {
    totalData: 0,
    currentPage: 0,
    totalPage: 0,
    results: []
  },
  errorMessage: null
}

const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_MOVIE': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'SET_MESSAGE': {
      return {
        ...state,
        errorMessage: action.payload
      }
    }
    case 'SET_MESSAGE_NULL': {
      return {
        ...state,
        errorMessage: null
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default authReducer
