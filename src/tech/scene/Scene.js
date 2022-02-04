import Text from "../text/Text"

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
  }

  init(game) {
    this._defineGameObjectFactory()
    this._defineManagersAndEvents(game)
    this._defineInput(game)
    this._defineSceneEvents()
  }

  destroyScene(game) {
    const promise = new Promise((resolve) => {
      this._destroyGameObjects()
      this._destroySceneEvents()
      resolve("done")
    })

    promise.then(() => {
      this._destroyDefinitions()
    })

    this.destroy(this, game)
  }

  _defineGameObjectFactory() {
    const self = this

    this.add = {
      text(config) {
        const textObject = new Text(config.name, config.text)
        textObject.setX(config.x)
        textObject.setY(config.y)
        self.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      },
      textObject(textObject) {
        self.objectManager.append(textObject)
        document.body.appendChild(textObject.element)
      }
    }

    this.remove = {
      text(name) {
        const textObject = self.objectManager.get(name)
        self.objectManager.delete(textObject)
        document.body.removeChild(textObject.element)
      }
    }
  }
  _defineManagersAndEvents(game) {
    this.events        = game.events
    this.sceneManager  = game.sceneManager
    this.objectManager = game.objectManager
    this.eventManager  = game.eventManager
  }
  _defineInput(game) {
    this.input = game.input
  }
  _defineSceneEvents() {
    const self = this

    this.events = {
      on(event, handler) {
        if (event === "input") {
          self.input.on("input", handler)
        }
      },
      addEventListener(gameObject, event, handler) {
        self.eventManager.addEventListener(gameObject, event, handler)
      }
    }
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
