const express = require('express')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

const auth = express.Router()
const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT

// POST
auth.post('/', (req, res, next) => {
  const { username, password } = req.body

  User.findOneAndUpdate({ username, password: md5(password) }, { token }, (error, user) => {
    if (error) return res.json({ error })
    if (user === null) return res.json({ error: 'username or password invalid' })

    const payload = {
      username
    }

    jwt.sign(payload, SECRET_KEY_JWT, (err, token) => {
      if (err) {
        res.json({ err })
      } else {
        res.json({ token })
      }
    })

  })
})

module.exports = auth
