import PubSub from "./PubSub"

class Input {
  constructor(keys = {}) {
    this.keys = keys
    this.events = new PubSub()
    this.isListening = false
  }

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }

  listen() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this))
    this.isListening = true
  }

  remove() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this))
    this.isListening = false
  }

  reset() {
    this.events = new PubSub()
  }

  addKey(key, name) {
    if (this._hasKey(key)) {
      throw new Error(`Input::addKey(): Adding key failed. key '${key}' already exists.`)
    }

    this.keys[key] = name
    return true
  }

  removeKey(key) {
    if (!this._hasKey(key)) {
      throw new Error(`Input::removeKey(): Removing key failed. '${key}' doesn't exist.`)
    }

    this.keys[key] === undefined
    return true
  }

  addEvent(fn, key) {
    this.events.subscribe("input", fn, key)
  }

  handleKeyDown(event) {
    const pressed = this.keys[event.key]
    if (pressed !== undefined) {
      event.preventDefault()
      this.events.publish("input", pressed)
    }
  }
}

export default Input
