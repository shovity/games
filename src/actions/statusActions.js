import { SET_STATUS } from '../constants/actionTypes'

export const setStatus = (data) => {
  return {
    type: SET_STATUS,
    data
  }
}
