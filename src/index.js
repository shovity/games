import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './components/App'
import socket from './socket'
import registerServiceWorker from './registerServiceWorker'

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

// subscribe websocket
socket.subscribe(store)

registerServiceWorker();
