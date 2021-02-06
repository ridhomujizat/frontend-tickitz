const initialState = {
  idMovie: null,
  title: null,
  cinemaName: null,
  imageCinema: null,
  price: null,
  idSchedule: null,
  date: null,
  time: null,
  seatSelected: [],
  total: 0,
  idTransaction: 0,
  erroMsg: ''
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_SCHEDULE': {
      return {
        ...state,
        ...action.payload,
        seatSelected: [],
        total: 0
      }
    }
    case 'SELECT_SEAT': {
      const seat = [...state.seatSelected]
      seat.push(action.payload.seat)
      const lovenestPrice = seat.indexOf('F10') > -1 ? Number(state.price) - 5000 : 0
      const total = Number(state.price) * state.seatSelected.length + lovenestPrice + Number(state.price)
      return {
        ...state,
        seatSelected: seat,
        total
      }
    }
    case 'REMOVE_SEAT': {
      const seat = [...state.seatSelected]
      const selected = seat.filter((item) => item !== action.payload.seat)
      const lovenestPrice = seat.indexOf('F10') > -1 ? Number(state.price) - 5000 : 0
      let total = Number(state.price) * selected.length + lovenestPrice
      if (total > 0 && selected.length === 0) {
        total = 0
      }
      return {
        ...state,
        seatSelected: selected,
        total
      }
    }
    case 'CREATE_TRANSACTION': {
      return {
        ...state,
        idTransaction: action.payload
      }
    }
    case 'TRANSACTION_MSG': {
      return {
        ...state,
        erroMsg: action.payload
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
