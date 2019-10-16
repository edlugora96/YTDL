const boom = require('@hapi/boom')
const chalk = require('chalk')
const config  = require('config')()

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { ...error, stack}
  }

  return { error }
}

const wrapErrors = (error, req, res, next) =>{
  if (!error.isBoom) {
    next(boom.badImplementation(error))
  }
  
  next(error)
}

const logErrors = (error, req, res, next) => {
  console.log(`${chalk.red('[Express Error]')}: ${error}`)
  next(error)
}

const errorHandler = (error, req, res, next) => {
  const { output: { statusCode, payload } } = error
  res.status(statusCode)
  res.json(withErrorStack(payload, error.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}