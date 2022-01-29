import AbstractInput    from "../../high-level/AbstractInput"
import interfaceGamepad from "./interfaceGamepad"

import xbox        from "./variants/xbox"
import playstation from "./variants/playstation"


// Gamepad.remove works outside events
// Bugs inside of events (requestAnimationFrame is still going)

class Gamepad extends AbstractInput {
  constructor(config) {
    super("Gamepad")
    interfaceGamepad(config)

    this.keys         = config.keys
    this.listening    = false
    this.gamepad      = null
    this.mapping      = this._getMap(config.mapping)
    this.eventEmitter = config.eventEmitter

    this._updateHandler             = this._update.bind(this)
    this._gamepadEventHandler       = this._gamepadEventHandler.bind(this)
    this._gamepadRemoveEventHandler = this._gamepadRemoveEventHandler.bind(this)
  }

  emit(pressed) {
    this.eventEmitter.publish("input", pressed)
  }

  attach() {
    window.addEventListener("gamepadconnected", this._gamepadEventHandler)
    window.addEventListener("gamepaddisconnected", this._gamepadRemoveEventHandler)

    this.listening = true
  }

  remove() {
    cancelAnimationFrame(this.animationFrameID)
    window.removeEventListener("gamepadconnected", this._gamepadEventHandler)
    window.removeEventListener("gamepaddisconnected", this._gamepadRemoveEventHandler)
    console.log(this.animationFrameID)

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
      throw new Error(`Gamepad::removeKey(): Removing key failed. '${key}' doesn't exist.`)
    }

    delete this.keys[key]
  }

  _update() {
    const self = this
    self.emit(this._getPressedButton())
    this.animationFrameID = requestAnimationFrame(self._updateHandler)
  }

  _gamepadEventHandler(event) {
    this.gamepad          = event.gamepad
    this.animationFrameID = requestAnimationFrame(this._updateHandler)
  }

  _gamepadRemoveEventHandler(event) {
    cancelAnimationFrame(this.animationFrameID)
  }

  _getPressedButton() {
    const gamepads       = navigator.getGamepads()
    const currentGamepad = gamepads[this.gamepad.index]

    const activeButton = () => {
      let targetIndex = null

      currentGamepad.buttons.forEach((button, index) => {
        if (button.pressed) {
          targetIndex = index
        }
      })

      return targetIndex
    }

    const active       = activeButton()
    const mappedButton = this.mapping[active]
    const keyedButton  = this.keys[mappedButton]

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
