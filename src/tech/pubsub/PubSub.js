import AbstractPubSub from "./abstract-PubSub.js"

class PubSub extends AbstractPubSub {
  constructor() {
    super()
    this.events = {}
  }

  publish(name, args) {
    this._assertPublish(name)

    if (!this.events[name]) {
      return
    }

    for (let callback of this.events[name]) {
      callback(args)
    }
  }

  subscribe(name, callback) {
    this._assertSubscribe(name, callback)

    this.events[name] = this.events[name] ? this.events[name].concat(callback) : [callback]
  }

  unsubscribe(name, callback) {
    this._assertUnsubscribe(name, callback)

    const targetArray = this.events[name]
    const index       = targetArray.indexOf(callback)

    if (index === -1) {
      throw new Error(`PubSub::unsubscribe(): Callback '${callback.name}()' not found in event '${name}'.`)
    }

    targetArray.splice(index, 1)

    if (targetArray.length === 0) {
      delete this.events[name]
    }
  }

  reset() {
    this.events = {}
  }

  _assertPublish(name) {
    if (!name) {
      throw new Error(`PubSub::publish(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::publish(): Parameter 'name' is not a string. Has to be of type <string>.")
    }
  }

  _assertSubscribe(name, callback) {
    if (!name) {
      throw new Error(`PubSub::subscribe(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (!callback) {
      throw new Error(`PubSub::subscribe(): Parameter 'callback' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::subscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    }

    if (typeof callback !== "function") {
      throw new TypeError("PubSub::subscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    }
  }

  _assertUnsubscribe(name, callback) {
    if (!name) {
      throw new Error(`PubSub::unsubscribe(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (!callback) {
      throw new Error(`PubSub::unsubscribe(): Parameter 'callback' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::unsubscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    }

    if (typeof callback !== "function") {
      throw new TypeError("PubSub::unsubscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    }

    if (!this.events.hasOwnProperty(name)) {
      throw new Error(`PubSub::unsubscribe(): Event '${name}' is not registered in the PubSub system.`)
    }
  }
}

export default PubSub
