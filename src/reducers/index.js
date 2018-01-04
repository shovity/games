import { combineReducers } from 'redux'
import user from './userReducer'
import status from './statusReducer'

const rootReducer = combineReducers({
  user,
  status
})

export default rootReducer
