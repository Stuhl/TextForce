class Input {
  constructor(keys = {}) {
    this.keys = keys
    this.listening = false
  }

  attach() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this))
    this.setListening(true)
  }

  remove() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this))
    this.setListening(false)
  }

  setListening(state) {
    this.listening = bool
  }

  setKey(key, name) {
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

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }
}

export default Input
