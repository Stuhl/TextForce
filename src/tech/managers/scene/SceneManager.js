/**
 * This is the scene manager class. It will manage all scenes of the game
 */
class SceneManager {
  /**
   * @param  {Game}         game The game
   * @return {SceneManager}      A instance of SceneManager
   */
  constructor(game) {
    /**
     * Holds the active scene
     * @private
     * @type {Scene}
     */
    this.activeScene = null

    /**
     * Holds all scenes
     * @private
     * @type {Scene[]}
     */
    this.scenes      = []

    /**
     * A instance of {@link Game}
     * @private
     * @type {Game}
     */
    this.game        = game
  }

  /**
   * Adds a scene
   * @param  {Scene} scene The scene
   * @return {void}
   */
  append(scene) {
    this.scenes.push(scene)
  }

  /**
   * Returns the current scene
   * @return {Scene}  The scene
   */
  getActiveScene() {
    return this.activeScene
  }

  /**
   * @ignore
   */
  clearMemory() {
    // Reverse destroy (safe method)
    /* 1. render
       2. component events
       3. input events
       4. PubSub events
       5. clone parent node
       6. reset object manager
    */
    this.game.parent.innerHTML = ""                     // 1
    this.game.input.inputEmitter.reset()                // 3
    this.game.parent = this.game.parent.cloneNode(true) // 5
    document.body.appendChild(this.game.parent)         // 5
    this.game.objectManager.reset()                     // 6
  }

  /**
   * Starts the specified scene
   * @param  {string} name   The name of the scene
   * @param  {Object} [data] Optional data
   * @return {void}
   */
  start(name, data) {
    this._isSceneExisting("start", name)

    const scene       = this._getScene(name)
    const activeScene = this.getActiveScene()

    if (scene === activeScene) {
      return
    }

    if (this.activeScene === null) {
      this.activeScene = scene
      scene.init(this.game)
      this._runScene(scene, data)

    } else {

      this.activeScene.destroyScene(this.game)
      this.activeScene = scene
      scene.init(this.game)
      this._runScene(scene, data)

    }
  }

  /**
   * @ignore
   */
  stop() {
    this._isASceneActive()
    const activeScene = this.getActiveScene()

    activeScene.destroyScene()
    this.activeScene = null
  }

  /**
   * @ignore
   */
  _getScene(name) {
    return this.scenes.find(scene => scene.name === name)
  }

  /**
   * @ignore
   */
  _runScene(scene, data) {
    scene.start(scene, this.game, data)
  }

  /**
   * @ignore
   */
  _isSceneExisting(caller, name) {
    if (!(this.scenes.find(scene => scene.name === name))) {
      throw new Error(`SceneManager::${caller}(): Scene '${name}' does not exist.`)
    }
  }

  /**
   * @ignore
   */
  _isASceneActive() {
    const activeScene = this.getActiveScene()
    if (!activeScene) {
      throw new Error("SceneManager::stop(): No scene is currently active and running.")
    }
  }
}

export default SceneManager
