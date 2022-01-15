import Gamepad from "../low-level/gamepad/Gamepad.js"
import Keyboard from "../low-level/keyboard/Keyboard.js"
import Input from "../high-level/Input.js"

import checkConfigWithInterface from "./interface.js"

const defaultConfig = {
  device: "keyboard"
}

class InputFactory {
  static create(config = defaultConfig) {
    if (config !== defaultConfig) {
      checkConfigWithInterface(config)

      if (config.device === "keyboard") {
        return new Input(new Keyboard({
          keys: config.keys
        }))
      }

      if (config.device === "gamepad") {
        return new Input(new Gamepad({
          keys: config.keys,
          mapping: config.mapping
        }))
      }
    }

    if (config.device === "keyboard") {
      return new Input(new Keyboard())
    }

    if (config.device === "gamepad") {
      return new Input(new Gamepad())
    }

    throw new Error("InputFactory::create(): Device not found.")
  }
}

export default InputFactory
