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


/**
 * This is the Game class. It's the main entry point to every TextForce game.
 */
class Game {
  /**
   * This is the Game class constructor. It will instantiate sub-classes that will be needed for the game.
   *
   * @param  {GameConfig} config - The game configuration object.
   * @returns {Game}
   */
  constructor(config) {
    /**
     * This is the preload function. You should put assets like Sound files into this function.
     * @private
     * @param   {Object} Game
     * @returns {void}
     */
    this.preload          = config.preload

    /**
     * A instance of the PubSub class
     * @private
     * @type {PubSub} PubSub
     */
    this.eventEmitter     = new PubSub()

    /**
     * A instance of the sound storage class
     * @private
     * @type {SoundStorage} SoundStorage
     */
    this.soundStorage     = new SoundStorage()

    /**
     * A instance of the scene manager class
     * @private
     * @type {SceneManager} SceneManager
     */
    this.sceneManager     = new SceneManager(this)

    /**
     * A instance of the Input class
     * @private
     * @type {null|Input} Input
     */
    this.input            = null

    /**
     * A instance of the asset storage class
     * @private
     * @type {AssetStorage} assetStorage
     */
    this.assetStorage     = new AssetStorage(this, Sound)

    /**
     * A instance of the scenes facade class
     * @private
     * @type {Scenes} scenesFacade
     */
    this.scenesFacade     = new Scenes(this)

    /**
     * A instance of the canvas class
     * @private
     * @type {Canvas} canvas
     */
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
    /**
     * Holds public storage methods
     * @public
     * @type {AssetStorage} store
     */
    this.store = this.assetStorage.getStore()
  }
  _defineScenes() {
    /**
     * Holds public scene methods
     * @public
     * @type {Scenes} scenes
     */
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


/**
 * @name Game#start
 * @function
 * @memberOf Scenes
 * @description Starts the specified scene
 * @param  {string} name scene name
 * @param  {Object} [data] Data you can pass into the scene
 * @returns {void}
 */

export default Game
