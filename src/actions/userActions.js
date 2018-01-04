import {
  REQUEST_USER, RECEIVE_USER
} from '../constants/actionTypes'

export const fetchUser = () => ({
  call: {
    path: 'user',
    casStart: requestAnime,
    casSuccess: receiveAnime
  }
})

export const requestAnime = () => ({
  type: REQUEST_USER
})

export const receiveAnime = result => ({
  type: RECEIVE_USER,
  result
})
