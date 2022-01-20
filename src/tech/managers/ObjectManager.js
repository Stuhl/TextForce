class ObjectManager {
  constructor(game) {
    this.objects = []
    this.game = game
  }

  append(object) {
    this._assertAppend(object)
    this.objects.push(object)
  }

  get(name) {
    this._assertGet(name)
    return this.objects.find(obj => obj.name === name)
  }

  delete(object) {
    this._assertDelete(object)
    const index = this.objects.indexOf(object)
    this.objects.splice(index, 1)
  }

  reset() {
    this.objects = []
  }

  _assertAppend(object) {
    if (!object) {
      throw new Error(`ObjectManager::append(): Parameter 'object' cannot be falsy. Must be a object.`)
    }

    if (typeof object !== "object") {
      throw new Error(`ObjectManager::append(): Parameter 'object' is not a object. Must be of type <object>.`)
    }
  }

  _assertGet(name) {
    if (!name) {
      throw new Error(`ObjectManager::get(): Parameter 'name' cannot be falsy. Must be a string.`)
    }

    if (typeof name !== "string") {
      throw new Error(`ObjectManager::get(): Parameter 'name' is not a string. Must be of type <string>.`)
    }

    if (!(this.objects.find(object => object.name === name))) {
      throw new Error(`ObjectManager::get(): Object '${name}' cannot be found.`)
    }
  }

  _assertDelete(targetObject) {
    if (!targetObject) {
      throw new Error(`ObjectManager::delete(): Parameter 'object' cannot be falsy. Must be a object.`)
    }

    if (typeof targetObject !== "object") {
      throw new Error(`ObjectManager::delete(): Parameter 'object' is not a object. Must be of type <object>.`)
    }

    if (!(this.objects.find(object => object === targetObject))) {
      throw new Error(`ObjectManager::delete(): Object '${name}' cannot be found.`)
    }
  }
}

export default ObjectManager
