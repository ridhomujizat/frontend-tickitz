const initialState = {
  token: null,
  name: 'Tickitzer',
  lastName: '',
  image: 'uploads/profile/profile-default.jpg',
  role: null,
  email: null,
  message: '',
  errorMsg: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'CREATE_PROFILE_AUTH': {
      return {
        ...state,
        name: action.payload
      }
    }
    case 'SET_LOGIN_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload
      }
    }
    case 'SUCCESS_MESSAGE': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'LOGOUT': {
      return {
        token: null,
        name: 'Tickitzer',
        lastName: '',
        image: 'uploads/profile/profile-default.jpg',
        role: null,
        message: '',
        errorMsg: ''
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
