import AbstractInput from "../../AbstractInput"

const defaultConfig = {
  keys: {
    "W": "UP",
    "A": "LEFT",
    "S": "DOWN",
    "D": "RIGHT",
    "w": "UP",
    "a": "LEFT",
    "s": "DOWN",
    "d": "RIGHT",
    "ArrowUp": "UP",
    "ArrowLeft": "LEFT",
    "ArrowDown": "DOWN",
    "ArrowRight": "RIGHT",
    "Enter": "CONFIRM",
    "Backspace": "BACK"
  }
}

class Keyboard extends AbstractInput {
  constructor(config = defaultConfig) {
    super("Keyboard")
    this.keys = config.keys
    this.listening = config.listening
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
    this.listening = state
  }

  getListening() {
    return this.listening
  }

  setKey(key, name) {
    if (this._hasKey(key)) {
      throw new Error(`Keyboard::setKey(): Adding key failed. key '${key}' already exists.`)
    }

    this.keys[key] = name
    return true
  }

  getKeys() {
    return this.keys
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
      console.log("Button pressed: ", pressed)
    }
  }

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }
}


export default Keyboard
