const logger = store => next => action => {
  action.type && console.log(action.type)
  next(action)
}

export default logger
