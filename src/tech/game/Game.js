import InputFactory  from "../input/factory/InputFactory"
import Text          from "../text/Text"
import Sound         from "../sound/Sound"
import Group         from "../group/Group"
import SoundStorage  from "../systems/SoundStorage"
import SceneManager  from "../managers/scene/SceneManager"
import ObjectManager from "../managers/object/ObjectManager"
import EventManager  from "../managers/event/EventManager"
import PubSub        from "../pubsub/Pubsub"
import Canvas        from "../canvas/Canvas"

import AssetStorage  from "./facade/AssetStorage"
import Scenes        from "./facade/Scenes"

class Game {
  constructor(config) {
    this.preload          = config.preload

    this.eventEmitter     = new PubSub()
    this.soundStorage     = new SoundStorage()
    this.sceneManager     = new SceneManager(this)
    this.input            = null

    this.assetStorage     = new AssetStorage(this, Sound)
    this.scenesFacade     = new Scenes(this)

    this.canvas           = new Canvas(config.canvas)

    this._init(config)
  }

  _init(config) {
    this._defineAssetStorage()
    this._defineScenes()
    this._defineGameEvents(config)
    this.preload(this)
    this._loadScenes(config.scenes)

    this._checkIfAssetsAreLoaded().then(done => {
      this._start(config.activeScene)
    })
  }

  _defineAssetStorage() {
    this.store = this.assetStorage.getStore()
  }
  _defineScenes() {
    this.scenes = this.scenesFacade.getScenes()
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

  async _checkIfAssetsAreLoaded() {
    await this.soundStorage.soundsAreReady()
    return "assets are ready"
  }
  _start(activeScene) {
    this.sceneManager.start(activeScene)
  }
}

export default Game
