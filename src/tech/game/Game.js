import InputFactory  from "../input/factory/InputFactory"
import Text          from "../text/Text"
import Sound         from "../sound/Sound"
import Group         from "../group/Group"
import SoundStorage  from "../systems/SoundStorage"
import SceneManager  from "../managers/scene/SceneManager"
import ObjectManager from "../managers/object/ObjectManager"
import EventManager  from "../managers/event/EventManager"
import PubSub        from "../pubsub/Pubsub"

class Game {
  constructor(config) {
    this.eventEmitter     = new PubSub()
    this.soundStorage     = new SoundStorage()
    this.sceneManager     = new SceneManager(this)
    this.objectManager    = new ObjectManager(this)
    this.eventManager     = new EventManager()
    this.preload          = config.preload

    this.input            = null

    const self = this

    this.store = {
      sound(name, path) {
        const soundFile = new Sound(name, path)
        self.soundStorage.append(soundFile)
      }
    }

    this._init(config)
  }

  _init(config) {
    this._defineGameEvents(config)
    this._loadScenes(config.scenes)
    this._start(config.activeScene)
  }

  _defineGameEvents(config) {
    config.input.eventEmitter = this.eventEmitter
    this.input                = InputFactory.create(config.input)
    this.input.attach()
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
