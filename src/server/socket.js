const io = require('socket.io')()

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`)

  socket.on('test', (data) => {
    socket.emit('test', data)
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`)
  })
})

module.exports = io
