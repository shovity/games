import websocket from 'socket.io-client'
import { setStatus } from '../actions/statusActions'

const socket = websocket()

const socketMiddleWare = ({ dispatch }) => {

  socket.on('connect', () => {
    dispatch(setStatus({ isOnline: true }))
  })

  socket.on('disconnect', () => {
    dispatch(setStatus({ isOnline: false }))
  })

  socket.on('reconnect', () => {
    console.log('reconnected')
  })

  socket.on('reconnect_error', () => {
    console.log('reconnected error')
  })

  // return a middle ware handle
  return next => action => {
    if (!action.socket) {
      next(action)
    } else {
      // const { event, data } = action.socket
    }
  }
}

export default socketMiddleWare
