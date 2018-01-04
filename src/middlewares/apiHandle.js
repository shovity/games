/**
 * CALL API CHAIN SYSTEM
 */

import { API_BASE_URL } from '../config'
import path from 'path'

// action - { call: { path, method, header, body .... casStart, casSuccess, casError } }

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

const extractParams = params => {
  return { ...params, path: path.join(API_BASE_URL, params.path) }
}

export default apiHandleMiddleware
