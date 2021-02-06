import { combineReducers } from 'redux'
import ertoReducer from './erto/ertoReducer'

const rootReducer = combineReducers({
  ertos: ertoReducer
})

export default rootReducer
