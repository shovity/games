import { combineReducers } from 'redux'
import user from './userReducer'
import status from './statusReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  user,
  status,
  auth
})

export default rootReducer
