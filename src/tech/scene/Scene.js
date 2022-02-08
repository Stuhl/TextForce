import ObjectManager     from "../managers/object/ObjectManager"
import EventManager      from "../managers/event/EventManager"
import Text              from "../text/Text"

import GameObjectsFacade from "./facade/GameObject"
import SceneEvents       from "./facade/SceneEvents"

class Scene {
  constructor(config) {
    this._assertConstructor(config)

    this.name          = config.name
    this.create        = config.create
    this.destroy       = config.destroy
    this.render        = config.render

    this.eventEmitter  = null
    this.sceneManager  = null
    this.objectManager = null
    this.eventManager  = null
    this.input         = null

    this.data = null

    this.GameObjectsFacade = new GameObjectsFacade(this, Text)
    this.sceneEvents       = new SceneEvents(this)
  }

  init(game) {
    this._defineGameObjectFactory()
    this._defineManagersAndEvents(game)
    this._defineInput(game)
    this._defineSceneEvents()
  }

  start(scene, game, data) {
    this._loadData(data)
    this.create(scene, game)
    this.render(scene, game)
  }

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

  _defineGameObjectFactory() {
    this.add    = this.GameObjectsFacade.getAdd()
    this.remove = this.GameObjectsFacade.getRemove()
  }
  _defineManagersAndEvents(game) {
    this.sceneManager  = game.sceneManager
    this.objectManager = new ObjectManager()
    this.eventManager  = new EventManager()
  }
  _defineInput(game) {
    this.input = game.input
  }
  _defineSceneEvents() {
    this.events = this.sceneEvents.getEvents()
  }
  _destroyData() {
    this.data = null
  }

  _loadData(data) {
    this.data = data
  }

  _destroyGameObjects() {
    const objects = this.objectManager.getObjects()

    objects.forEach(gameObject => {
      document.body.removeChild(gameObject.element)
    })
    this.objectManager.reset()
  }
  _destroySceneEvents() {
    this.input.resetEvents()
    this.eventManager.removeAllEventListeners()
  }
  _destroyDefinitions() {
    this.eventEmitter  = null
    this.sceneManager  = null
    this.objectManager = null
    this.eventManager  = null
    this.input         = null
  }

  _assertConstructor(config) {
    this._isConfigDefined(config)
    this._configHasNameProperty(config)
    this._configHasNeededMethods(config)
  }

  _isConfigDefined(config) {
    if (!config) {
      throw new Error("Scene::constructor(): Parameter 'config' is falsy. You must pass in a object.")
    }

    if (typeof config !== "object") {
      throw new Error("Scene::constructor(): Parameter 'config' is not a object. It must be of type object.")
    }
  }
  _configHasNameProperty(config) {
    if (!config.name) {
      throw new Error("Scene::constructor(): Missing property 'name' in config.")
    }

    if (typeof config.name !== "string") {
      throw new Error("Scene::constructor(): Value of property 'name' is not a string. Must be of type <string>.")
    }
  }
  _configHasNeededMethods(config) {
    const missingFunctions = this._getMissingFunctions(config)

    if (missingFunctions.length > 0) {
      const stringed = missingFunctions.toString()
      throw new Error(`Scene::contructor(): The following functions are missing in the config object: [${stringed}]`)
    }

    this._CheckIfKeysAreFunctions(config)
  }
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
