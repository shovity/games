const express = require('express')

const user = require('./user')
const auth = require('./auth')

const v1 = express.Router()

v1.get('/', (req, res, next) => {
  res.json({ what: 'API version 1'})
})

v1.get('/user', user)
v1.get('/auth', auth)

module.exports = v1
