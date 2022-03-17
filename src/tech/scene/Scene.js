import ObjectManager     from "../managers/object/ObjectManager"
import EventManager      from "../managers/event/EventManager"
import Text              from "../text/Text"
import GameObjectsFacade from "./facade/GameObject"
import SceneEvents       from "./facade/SceneEvents"


/**
 * The scene class. Use this to create scenes. Scenes are very flexible. Can be used for Battle scenes, cutscenes etc.
 */
class Scene {
  /**
   * @param  {SceneConfig} config A scene configuration object
   * @return {Scene}              A instance of Scene
   */
  constructor(config) {
    this._assertConstructor(config)

    /**
     * @ignore
     */
    this.name          = config.name

    /**
     * @ignore
     */
    this.create        = config.create

    /**
     * @ignore
     */
    this.destroy       = config.destroy

    /**
     * @ignore
     */
    this.render        = config.render

    /**
     * @ignore
     */
    this.eventEmitter  = null

    /**
     * @ignore
     */
    this.sceneManager  = null

    /**
     * @ignore
     */
    this.objectManager = null

    /**
     * @ignore
     */
    this.eventManager  = null

    /**
     * @ignore
     */
    this.input         = null

    /**
     * @ignore
     */
    this.data          = null

    /**
     * @ignore
     */
    this.GameObjectsFacade = new GameObjectsFacade(this, Text)
    /**
     * @ignore
     */
    this.sceneEvents       = new SceneEvents(this)
  }

  /**
   * @ignore
   */
  init(game) {
    this._defineGameObjectFactory()
    this._defineManagersAndEvents(game)
    this._defineInput(game)
    this._defineSceneEvents()
  }

  /**
   * @ignore
   */
  start(scene, game, data) {
    this._loadData(data)
    this.create(scene, game)
    this.render(scene, game)
  }

  /**
   * @ignore
   */
  destroyScene(game) {
    const promise = new Promise((resolve) => {
      this._destroyGameObjects()
      this._destroySceneEvents()
      resolve("done")
    })

    promise.then(() => {
      this._destroyDefinitions()
      this.destroy(this, game)
    })
  }

  /**
   * @ignore
   */
  _defineGameObjectFactory() {
    /**
     * @ignore
     */
    this.add    = this.GameObjectsFacade.getAdd()
    /**
     * @ignore
     */
    this.remove = this.GameObjectsFacade.getRemove()
  }
  /**
   * @ignore
   */
  _defineManagersAndEvents(game) {
    this.sceneManager  = game.sceneManager
    this.objectManager = new ObjectManager()
    this.eventManager  = new EventManager()
  }
  /**
   * @ignore
   */
  _defineInput(game) {
    this.input = game.input
  }
  /**
   * @ignore
   */
  _defineSceneEvents() {
    /**
     * @ignore
     */
    this.events = this.sceneEvents.getEvents()
  }
  /**
   * @ignore
   */
  _destroyData() {
    this.data = null
  }
  /**
   * @ignore
   */
  _loadData(data) {
    this.data = data
  }
  /**
   * @ignore
   */
  _destroyGameObjects() {
    const objects = this.objectManager.getObjects()

    objects.forEach(gameObject => {
      document.body.removeChild(gameObject.element)
    })
    this.objectManager.reset()
  }
  /**
   * @ignore
   */
  _destroySceneEvents() {
    this.input.resetEvents()
    this.eventManager.removeAllEventListeners()
  }
  /**
   * @ignore
   */
  _destroyDefinitions() {
    this.eventEmitter  = null
    this.sceneManager  = null
    this.objectManager = null
    this.eventManager  = null
    this.input         = null
  }
  /**
   * @ignore
   */
  _assertConstructor(config) {
    this._isConfigDefined(config)
    this._configHasNameProperty(config)
    this._configHasNeededMethods(config)
  }
  /**
   * @ignore
   */
  _isConfigDefined(config) {
    if (!config) {
      throw new Error("Scene::constructor(): Parameter 'config' is falsy. You must pass in a object.")
    }

    if (typeof config !== "object") {
      throw new Error("Scene::constructor(): Parameter 'config' is not a object. It must be of type object.")
    }
  }
  /**
   * @ignore
   */
  _configHasNameProperty(config) {
    if (!config.name) {
      throw new Error("Scene::constructor(): Missing property 'name' in config.")
    }

    if (typeof config.name !== "string") {
      throw new Error("Scene::constructor(): Value of property 'name' is not a string. Must be of type <string>.")
    }
  }
  /**
   * @ignore
   */
  _configHasNeededMethods(config) {
    const missingFunctions = this._getMissingFunctions(config)

    if (missingFunctions.length > 0) {
      const stringed = missingFunctions.toString()
      throw new Error(`Scene::contructor(): The following functions are missing in the config object: [${stringed}]`)
    }

    this._CheckIfKeysAreFunctions(config)
  }
  /**
   * @ignore
   */
  _getMissingFunctions(config) {
    const functions = ["create", "render", "destroy"]
    const missing = []

    functions.forEach(name => {
      if (!config.hasOwnProperty(name)) {
        missing.push(name)
      }
    })

    return missing
  }
  /**
   * @ignore
   */
  _CheckIfKeysAreFunctions(config) {
    const functions = ["create", "render", "destroy"]

    functions.forEach(name => {
      if (typeof config[name] !== "function") {
        throw new Error(`Scene::contructor(): Value of key '${name}' is not a function. The value must be of type <function>.`)
      }
    })
  }
}

export default Scene
