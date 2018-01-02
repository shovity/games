import {
  REQUEST_USER, RECEIVE_USER
} from '../constants/actionTypes';

const initialUserState = {
  meta: {},
  objects: []
}

const animeReducer = (state=initialUserState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return state
    case RECEIVE_USER:
      return { ...action.result }
    default:
      return state
  }
}

export default animeReducer
