/**
 * CALL API CHAIN SYSTEM
 * action - { call: { path, method, header, body .... casStart, casSuccess, casError } }
 */

import path from 'path'

const API_BASE = process.env.REACT_APP_API_BASE

const apiHandleMiddleware = store => next => action => {
  if (!action.call) {
    next(action)
  } else {
    // Get data from call bundle
    const { path, method, casStart, casSuccess, casError} = extractParams(action.call)

    // Execute action start
    if (typeof casStart === 'function') {
      store.dispatch(casStart())
    } else if (Array.isArray(casStart)) {
      casStart.forEach(ca => {store.dispatch(ca())})
    } else {
      console.log('call actions start invalid')
    }

    // Init default options
    const options = {
      method: method || 'GET'
    }

    fetch(path, options).then(res => res.json()).then(data => {
      if (typeof casSuccess === 'function') {
        store.dispatch(casSuccess(data))
      } else if (Array.isArray(casSuccess)) {
        casSuccess.forEach(ca => {store.dispatch(ca(data))})
      } else {
        console.log('call actions success invalid')
      }
    }).catch(error => {
      if (typeof casError === 'function') {
        store.dispatch(casError(error))
      } else if (Array.isArray(casError)) {
        casError.forEach(ca => {store.dispatch(ca(error))})
      } else {
        console.log('call actions error invalid')
      }
    })
  }
}

if (!API_BASE) console.log('API_BASE env is null')

const extractParams = params => {
  return { ...params, path: path.join(API_BASE, params.path) }
}

export default apiHandleMiddleware
