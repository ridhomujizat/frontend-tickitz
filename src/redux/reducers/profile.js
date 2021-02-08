const initialState = {
  firstName: 'Tickitzer',
  image: 'uploads/profile/profile-default.jpg',
  profileAvailable: false,
  id: null,
  email: null,
  lastName: null,
  phone: null,
  message: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'CREATE_PROFILE': {
      return {
        ...state,
        ...action.payload,
        image: 'uploads/profile/profile-default.jpg'
      }
    }
    case 'MESSAGE': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'LOGOUT': {
      return {
        firstName: 'Tickitzer',
        image: 'uploads/profile/profile-default.jpg',
        profileAvailable: false,
        id: null,
        email: null,
        lastName: null,
        phone: null,
        message: ''
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default profileReducer
