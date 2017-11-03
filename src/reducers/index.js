import { combineReducers } from 'redux'
import quoteSearchReducer from './quoteSearchReducer'
import navigationReducer from './navigationReducer'

const rootReducer = combineReducers({
  quoteSearchReducer,
  navigationReducer
})

export default rootReducer
