import { SET_STATUS } from '../constants/actionTypes'

const initialStatusState = {
  isConnected: false
}

const statusReducer = (state=initialStatusState, action) => {
  switch (action.type) {
    case SET_STATUS:
      if (action.data && typeof action.data.isConnected === 'boolean') {
        return {...state, isConnected: action.data.isConnected }
      }
      return state

    default:
      return state
  }
}

export default statusReducer
