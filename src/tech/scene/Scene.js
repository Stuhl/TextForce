class Scene {
  constructor(config) {
    this._assertConstructor(config)

    this.name    = config.name
    this.create  = config.create
    this.destroy = config.destroy
    this.render  = config.render
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
