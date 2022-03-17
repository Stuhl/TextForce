/**
 * This is the Object manager class. It will store all the objects in the current scene
 */
class ObjectManager {
  /**
   * @return {ObjectManager}  A instance of ObjectManager
   */
  constructor() {
    /**
     * Holds all the objects in the current scene
     * @private
     * @type {Object[]}
     */
    this.objects = []
  }

  /**
   * Adds a game object
   * @param  {(Text|Group)} object A game object
   * @return {void}
   */
  append(object) {
    this._assertAppend(object)
    this.objects.push(object)
  }

  /**
   * Returns a game object by the name. If it can't find a corresponding object then it will return undefined
   * @param  {string}                 name The name of the game object
   * @return {(Text|Group|Undefined)}      The game object or undefined
   */
  get(name) {
    this._assertGet(name)
    return this.objects.find(obj => obj.name === name)
  }

  /**
   * Returns all game objects as an array
   * @return {Object[]}  The game object array
   */
  getObjects() {
    return this.objects
  }

  /**
   * Removes the game object from the current scene
   * @param  {(Text|Group)} object The game object
   * @return {void}
   */
  delete(object) {
    this._assertDelete(object)
    const index = this.objects.indexOf(object)
    this.objects.splice(index, 1)
  }

  /**
   * Removes all game objects
   * @return {void}
   */
  reset() {
    this.objects = []
  }

  /**
   * @ignore
   */
  _assertAppend(object) {
    if (!object) {
      throw new Error(`ObjectManager::append(): Parameter 'object' cannot be falsy. Must be a object.`)
    }

    if (typeof object !== "object") {
      throw new Error(`ObjectManager::append(): Parameter 'object' is not a object. Must be of type <object>.`)
    }
  }

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */ 
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
