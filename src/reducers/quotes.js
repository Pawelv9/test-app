import { CREATE_QUOTE } from '../actions/createQuote'

const quotes = (state = {}, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      return {
        ...state,
        data: action.payload 
      }
    default:
      return state
  }
}

export default quotes;