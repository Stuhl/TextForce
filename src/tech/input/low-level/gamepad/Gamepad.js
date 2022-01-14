import AbstractInput from "../../AbstractInput.js"

import xbox from "./variants/xbox"
import playstation from "./variants/playstation"

const defaultConfig = {
  keys: {
    "A": "CONFIRM",
    "B": "BACK",
    "CROSS-UP": "UP",
    "CROSS-LEFT": "LEFT",
    "CROSS-DOWN": "DOWN",
    "CROSS-RIGHT": "RIGHT"
  },
  mapping: "xbox"
}

class Gamepad extends AbstractInput {
  constructor(config = defaultConfig) {
    super("Gamepad")
    this.keys = config.keys
    this.listening = false
    this.gamepad = null
    this.mapping = this._getMap(config.mapping)
  }

  update() {
    const self = this
    self.render(this._getPressedButton())
    requestAnimationFrame(self.update.bind(self))
  }

  emit() {
    this.events
  }

  render(pressed) {
    if (pressed) {
      console.log(`Button pressed: ${pressed}`)
    }
  }

  attach() {
    window.addEventListener("gamepadconnected", (event) => {
      this.gamepad = event.gamepad
      requestAnimationFrame(this.update.bind(this))
    })

    window.addEventListener("gamepaddisconnected", (event) => {
      cancelAnimationFrame(this.update.bind(this))
    })

    this.setListening(true)
  }

  remove() {
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
      throw new Error(`Gamepad::setKey(): Adding key failed. key '${key}' already exists.`)
    }

    this.keys[key] = name
    return true
  }

  getKeys() {
    return this.keys
  }

  removeKey(key) {
    if (!this._hasKey(key)) {
      throw new Error(`Gamepad::removeKey(): Removing key failed. '${key}' doesn't exist.`)
    }

    this.keys[key] === undefined
    return true
  }

  _getPressedButton() {
    const gamepads = navigator.getGamepads()
    const currentGamepad = gamepads[this.gamepad.index]

    const activeButtonIndex = () => {
      let targetIndex = null

      currentGamepad.buttons.forEach((button, index) => {
        if (button.pressed) {
          targetIndex = index
        }
      })

      return targetIndex
    }

    const active = activeButtonIndex()
    const mappedButton = this.mapping[active]
    const keyedButton = this.keys[mappedButton]

    return keyedButton
  }

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }

  _getMap(variant) {
    if (variant === "xbox") {
      return xbox()
    }

    if (variant === "playstation") {
      return playstation()
    }
  }
}

export default Gamepad
