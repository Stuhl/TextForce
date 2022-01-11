class PubSub {
  constructor() {
    this.events = {}
    this.errorHandlingTitle = "PubSub Error:"
  }

  _checkName(name) {
    if (name.length === 0) {
      throw new Error(this.errorHandlingTitle + " Name parameter has length 0.")
    }
  }

  _isEmpty() {
    if (Object.keys(this.events).length <= 0) {
      throw new Error(this.errorHandlingTitle + " Event object is empty.")
    }
  }

  _isRegistered(name) {
    if (!this.events.hasOwnProperty(name)) {
      throw new Error(this.errorHandlingTitle + " Event is not registered.")
    }
  }

  _isKeyValid(name, key) {
    const event = this.events[name]

    if (event) {
      const keyAlreadyInUse = event.find(subscriber => subscriber.key === key)

      if (keyAlreadyInUse) {
        throw new Error(this.errorHandlingTitle + " Key is already in use.")
      }
    }
  }

  _isKeyRegistered(name, key) {
    const event = this.events[name]
    const keyIsRegistered = event.find(subscriber => subscriber.key === key)
    if (!keyIsRegistered) {
      throw new Error(this.errorHandlingTitle + " Key not found.")
    }
  }

  subscribe(name, fn, key) {
    if (name === undefined || fn === undefined) {
      throw new Error(this.errorHandlingTitle + " Missing name or fn parameter.")
    }
    this._checkName(name)
    this._isKeyValid(name, key)


    this.events[name] = this.events[name] || []
    this.events[name].push({
      fn,
      key
    })
  }

  publish(name, args) {
    this._checkName(name)
    this._isRegistered(name)
    this._isEmpty()

    for (let subscriber of this.events[name]) {
      subscriber.fn(args)
    }
  }

  unsubscribe(name, key) {
    this._checkName(name)
    this._isRegistered(name)
    this._isEmpty()
    this._isKeyRegistered(name, key)

    this.events[name].forEach((subscriber, i) => {
      if (subscriber.key === key) {
        this.events[name].splice(i, 1)
      }
    })
  }

  reset() {
    this.events = {}
    return true
  }
}
