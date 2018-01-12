import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import dotenv from 'dotenv'

import App from './components/App'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import { receiveToken } from './actions/authActions'

if (process.env.NODE_ENV === 'development') {
  console.log('loading environment for development')
  // console.log()
  dotenv.config()
} else {
  console.log('loading environment for production')
  dotenv.config()
}

console.log(process.env)

const root = document.getElementById('root')
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
)

store.dispatch(receiveToken({ token: 'sfsdfsf' }))

registerServiceWorker();
