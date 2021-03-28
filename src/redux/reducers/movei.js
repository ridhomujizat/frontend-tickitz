const initialstate = {
  movie: null,
  movieNowShowing: null,
  movieUpcoming: null,
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
