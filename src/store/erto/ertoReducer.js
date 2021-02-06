import {
    FETCH_ERTOS_REQUEST,
    FETCH_ERTOS_SUCCESS,
    FETCH_ERTOS_FAILURE
} from './ertoTypes'
  
const initialState = {
    loading: false,
    ertos: [],
    error: ''
}
  
const ertosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ERTOS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_ERTOS_SUCCESS:
        return {
          loading: false,
          ertos: action.payload,
          error: ''
        }
      case FETCH_ERTOS_FAILURE:
        return {
          loading: false,
          ertos: [],
          error: action.payload
        }
      default: return state
    }
}
  
export default ertosReducer
  