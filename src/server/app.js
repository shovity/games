const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const v1 = require('./api/v1')
const socket = require('./socket')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3030

socket.attach(server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api/v1', v1)

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'test.html'))
})

server.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
