import InputFactory from "../input/factory/InputFactory"
import Text from "../text/Text"
import Group from "../group/Group"
// import Storage from "./Storage"
// import EventManager from "./managers/EventManager"
// import ObjectManager from "./managers/ObjectManager"
// import SoundManager from "./managers/SoundManager"
// import SceneManager from "./managers/SceneManager"

const defaultConfig = {
  input: {
    device: "gamepad",
    keys: {
      "A" : "CONFIRM"
    }
  }
}

class Game {
  static Text = Text
  static Group = Group

  constructor(config = defaultConfig) {
    this.input = InputFactory.create(config.input)


    this.init()
  }

  init() {
    this.input.attach()
  }
}

export default Game
