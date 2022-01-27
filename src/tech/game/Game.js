import InputFactory  from "../input/factory/InputFactory"
import Text          from "../text/Text"
import Sound         from "../sound/Sound"
import Group         from "../group/Group"
import SoundStorage  from "../systems/SoundStorage"
import SceneManager  from "../managers/SceneManager"
import ObjectManager from "../managers/ObjectManager"
import PubSub        from "../pubsub/Pubsub"

class Game {
  constructor(config) {
    this.gameEventEmitter = new PubSub()

    config.input.eventEmitter = this.gameEventEmitter

    this.input            = InputFactory.create(config.input)
    this.soundStorage     = new SoundStorage()
    this.sceneManager     = new SceneManager(this)
    this.objectManager    = new ObjectManager(this)
    this.preload          = config.preload

    const self = this

    this.store = {
      sound(name, path) {
        const soundFile = new Sound(name, path)
        self.soundStorage.append(soundFile)
      }
    }

    this.add = {
      text(name, innerHTML) {
        const textObject = new Text(name, innerHTML)
        self.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      },
      textObject(textObject) {
        self.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      }
    }

    this.remove = {
      textObject(textObject) {
        self.objectManager.delete(textObject)
        document.body.removeChild(textObject.element)
      }
    }

    this.init(config)
  }

  init(config) {
    this.input.attach()
    this._loadScenes(config.scenes)
    this._start(config.activeScene)
  }

  _loadScenes(scenes) {
    for (let scene of scenes) {
      this.sceneManager.append(scene)
    }
  }

  _start(activeScene) {
    this.sceneManager.start(activeScene)
  }
}

export default Game
