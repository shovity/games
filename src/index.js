import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import configureStore from './store/configureStore'
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

registerServiceWorker();
