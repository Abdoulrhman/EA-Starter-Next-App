import {
  FETCH_PHRASES_REQUEST,
  FETCH_PHRASES_FAILURE,
  FETCH_PHRASES_SUCCESS,
} from './phrasesTypes'

const initialState = {
  loading: false,
  phrases: [],
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHRASES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PHRASES_SUCCESS:
      return {
        loading: false,
        phrases: action.payload,
        error: '',
      }
    case FETCH_PHRASES_FAILURE:
      return {
        loading: false,
        phrases: [],
        error: action.payload,
      }
    default: return state
  }
}

export default reducer
