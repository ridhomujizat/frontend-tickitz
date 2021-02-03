const initialState = {
  idMovie: null,
  title: null,
  cinemaName: null,
  imageCinema: null,
  price: null,
  idSchdule: null,
  date: null,
  time: null,
  seat: null,
  seatChoosed: []
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_SCHEDULE': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default orderReducer
