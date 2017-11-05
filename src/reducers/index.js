import { combineReducers } from 'redux'
import quoteSearchReducer from './quoteSearchReducer'
import newsReducer from './newsReducer'
import navigationReducer from './navigationReducer'

const rootReducer = combineReducers({
  quoteSearchReducer,
  newsReducer,
  navigationReducer
})

export default rootReducer
