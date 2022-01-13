class ErrorLogger {
  constructor(loggerName) {
    this.loggerName = loggerName
    this.errors = {}

    if (!loggerName) {
      throw new Error(`ErrorLogger constructor: 'loggerName' parameter cannot be falsy.`)
    }

    if (typeof loggerName !== "string") {
      throw new Error(`ErrorLogger constructor: 'loggerName' parameter must be a string.`)
    }
  }

  append(name, value) {
    this._assertParameterName(name)
    this._assertParameterValue(value)
    this._assertAppend()

    this.errors[name] = value
  }

  throw(name) {
    this._assertThrow(name)
    const errorValue = this.errors[name]

    throw new Error(`${this.loggerName}: '${name}' error -> ${errorValue}`)
  }

  _assertAppend(name, value) {
    if (this.errors.hasOwnProperty(name)) {
      throw new Error(`${this.loggerName} at append(): '${name}' already exists.`)
    }
  }

  _assertThrow(name) {
    if (!this.errors.hasOwnProperty(name)) {
      throw new Error(`${this.loggerName} at throw(): '${name}' does not exist.`)
    }
    this._assertParameterName(name)
  }

  _assertParameterName(name) {
    if (!name) {
      throw new Error(`${this.loggerName}: 'name' parameter cannot be falsy.`)
    }

    if (typeof name !== "string") {
      throw new Error(`${this.loggerName}: Error '${name}' already exists.`)
    }
  }

  _assertParameterValue(value) {
    if (value === undefined || value === null) {
      throw new Error(`${this.loggerName}: 'name' parameter cannot be undefined or null.`)
    }
  }
}

export default ErrorLogger
