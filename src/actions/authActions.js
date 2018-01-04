import {
  REQUEST_TOKEN, RECEIVE_TOKEN
} from '../constants/actionTypes'

// call api chain actiosn
export const getAccessToken = (username, password) => {
  return {
    call: {
      path: 'auth',
      casStart: requestToken(username, password),
      casSuccess:
    }
  }
}

// plain actions
export const requestToken = () => {
  return {
    type: REQUEST_TOKEN
  }
}
