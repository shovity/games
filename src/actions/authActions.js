import {
  REQUEST_TOKEN, RECEIVE_TOKEN
} from '../constants/actionTypes'

// call api chain actiosn
export const getAccessToken = (username, password) => {
  return {
    call: {
      path: 'auth',
      body: { username, password },
      casStart: requestToken,
      casSuccess: receiveToken
    }
  }
}

// plain actions
export const requestToken = () => {
  return {
    type: REQUEST_TOKEN
  }
}

export const receiveToken = (data) => {
  return {
    type: RECEIVE_TOKEN,
    data
  }
}
