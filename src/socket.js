import io from 'socket.io-client'

const socket = io()

const subscribe = (store) => {
  socket.emit('test', { a : 1 })
  socket.on('test', (data) => {
    console.log(data)
  })
}

export default { subscribe }
