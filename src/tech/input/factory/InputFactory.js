import Gamepad  from "../low-level/gamepad/Gamepad"
import Keyboard from "../low-level/keyboard/Keyboard"
import Input    from "../high-level/Input"

import interfaceInputFactory from "./InterfaceInputFactory"

class InputFactory {
  static create(config) {
    interfaceInputFactory(config)

    if (config.device === "keyboard") {
      return new Input(new Keyboard({
        keys: config.keys,
        eventEmitter: config.eventEmitter
      }))
    }

    if (config.device === "gamepad") {
      return new Input(new Gamepad({
        keys: config.keys,
        mapping: config.mapping,
        eventEmitter: config.eventEmitter
      }))
    }

  }
}

export default InputFactory
