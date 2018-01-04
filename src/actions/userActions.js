import {
  REQUEST_USER, RECEIVE_USER
} from '../constants/actionTypes'

// call chain api
export const fetchUser = () => ({
  call: {
    path: 'user',
    casStart: requestUser,
    casSuccess: receiveUser
  }
})

// plain acitons
export const requestUser = () => ({
  type: REQUEST_USER
})

export const receiveUser = data => ({
  type: RECEIVE_USER,
  data
})
