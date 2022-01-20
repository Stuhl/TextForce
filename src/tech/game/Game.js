import InputFactory from "../input/factory/InputFactory"
import Text         from "../text/Text"
import Group        from "../group/Group"
import SoundStorage from "../systems/SoundStorage"
import SceneManager from "../managers/SceneManager"

const defaultConfig = {
  input: {
    device: "keyboard",
  },
  preload() {
    console.warn("No preload() function.")
  }
}

class Game {
  static Text = Text
  static Group = Group

  constructor(config = defaultConfig) {
    this.input        = InputFactory.create(config.input)
    this.soundStorage = new SoundStorage()
    this.sceneManager = new SceneManager()
    this.preload      = config.preload
    this.init()
  }

  init() {
    this.input.attach()
    this.preload(this)
  }
}

export default Game
