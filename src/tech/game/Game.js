import InputFactory  from "../input/factory/InputFactory"
import Text          from "../text/Text"
import Sound         from "../sound/Sound"
import Group         from "../group/Group"
import SoundStorage  from "../systems/SoundStorage"
import SceneManager  from "../managers/SceneManager"
import ObjectManager from "../managers/ObjectManager"

class Game {
  static Text  = Text
  static Group = Group

  constructor(config) {
    this.input         = InputFactory.create(config.input)
    this.soundStorage  = new SoundStorage()
    this.sceneManager  = new SceneManager(this)
    this.objectManager = new ObjectManager(this)
    this.preload       = config.preload


    const self = this


    this.store = {
      sound(name, path) {
        const soundFile = new Sound(name, path)
        self.soundStorage.append(soundFile)
      }
    }

    this.add = {
      text(element, name, innerHTML) {
        const textObject = new Text(element, name, innerHTML)
        self.objectManager.append(textObject)
      }
    }
    this.init()
  }

  init() {
    this.input.attach()
    this.preload(this)
  }
}

export default Game
