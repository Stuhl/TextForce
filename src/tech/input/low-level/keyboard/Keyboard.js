import AbstractInput     from "../../high-level/AbstractInput"
import interfaceKeyboard from "./interfaceKeyboard"

class Keyboard extends AbstractInput {
  constructor(config) {
    super("Keyboard")
    interfaceKeyboard(config)

    this.keys            = config.keys
    this.listening       = config.listening
    this.eventEmitter    = config.eventEmitter

    this._keyDownHandler = this._handleKeyDown.bind(this)
  }

  attach() {
    document.addEventListener("keydown", this._keyDownHandler)
    this.listening = true
  }

  remove() {
    document.removeEventListener("keydown", this._keyDownHandler)
    this.listening = false
  }

  getListening() {
    return this.listening
  }

  setKey(key, name) {
    this.keys[key] = name
  }

  getKeys() {
    return this.keys
  }

  removeKey(key) {
    if (!this._hasKey(key)) {
      throw new Error(`Keyboard::removeKey(): Removing key failed. Key '${key}' does not exist.`)
    }

    delete this.keys[key]
  }

  on(event, callback) {
    if (event === "input") {
      this.eventEmitter.subscribe(event, callback)
      return
    }

    throw new Error(`Keyboard::on(): Event '${event}' is not a valid event. Valid events are: [input].`)
  }

  off(event, callback) {
    if (event === "input") {
      this.eventEmitter.unsubscribe(event, callback)
      return
    }

    throw new Error(`Keyboard::on(): Event '${event}' is not a valid event. Valid events are: [input].`)
  }

  _handleKeyDown(event) {
    const pressed = this.keys[event.key]
    if (pressed !== undefined) {
      event.preventDefault()
      this.eventEmitter.publish("input", pressed)
    }
  }

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }
}


export default Keyboard
