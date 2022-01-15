import AbstractPubSub from "./abstract-PubSub.js"

class PubSub extends AbstractPubSub {
  constructor() {
    super()
    this.events = {}
  }

  publish(name, args) {
    this._assertPublish(name)

    if (this.events[name]) {
      for (let callback of this.events[name]) {
        callback(args)
      }
    }
  }

  subscribe(name, callback) {
    this._assertSubscribe(name)

    this.events[name] = this.events[name] ? this.events[name].concat(callback) : [callback]
  }

  unsubscribe(name, callback) {
    this._assertUnsubscribe(name)

    const targetArray = this.events[name]
    const index = targetArray.indexOf(callback)
    targetArray.splice(index, 1)

    if (targetArray.length === 0) {
      delete this.events[name]
    }
  }

  clear() {
    this.events = {}
  }

  _assertPublish(name) {
    this._isTruthy(name)
    this._isString(name)
  }

  _assertSubscribe(name) {
    this._isTruthy(name)
    this._isString(name)
  }

  _assertUnsubscribe(name) {
    this._isTruthy(name)
    this._isString(name)
    // this._isRegistered(name)
  }

  _isTruthy(name) {
    if (!name) {
      throw new Error(`PubSub::_isTruthy(): Parameter 'name' cannot be falsy.`)
    }
  }

  _isString(name) {
    if (typeof name !== "string") {
      throw new Error(`PubSub::_isString(): Parameter 'name' has to be a string.`)
    }
  }

  _isRegistered(name) {
    if (!this.events.hasOwnProperty(name)) {
      throw new Error(`PubSub::_isRegistered(): Event '${name}' is not registered in the PubSub system.'`)
    }
  }
}

export default PubSub
