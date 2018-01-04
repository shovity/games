import { SET_STATUS } from '../constants/actionTypes'

const initialStatusState = {
  isOnline: false
}

const statusReducer = (state=initialStatusState, action) => {
  switch (action.type) {
    case SET_STATUS:
      if (action.data && typeof action.data.isOnline === 'boolean') {
        return {...state, isOnline: action.data.isOnline }
      }
      return state

    default:
      return state
  }
}

export default statusReducer
