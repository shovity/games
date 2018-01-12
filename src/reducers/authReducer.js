import {
  REQUEST_TOKEN, RECEIVE_TOKEN
} from '../constants/actionTypes'

const initialAuthState = {
  token: '',
  type: 'jwt',
  isFetching: false
}

const authRecuder = (state=initialAuthState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state, isFetching: true }

    case RECEIVE_TOKEN:
      if (!action.data || !action.data.token) return state
      return { ...state, isFetching: false, token: action.data.token }

    default:
      return state

  }
}

export default authRecuder
