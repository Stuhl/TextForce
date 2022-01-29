class SceneManager {
  constructor(game) {
    this.activeScene = null
    this.scenes = []
    this.game   = game
  }

  append(scene) {
    this.scenes.push(scene)
  }

  getActiveScene() {
    return this.activeScene
  }

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

  start(name) {
    this._isSceneExisting("start", name)
    const scene       = this._getScene(name)
    const activeScene = this.getActiveScene()

    if (scene === activeScene) {
      return
    }

    if (this.activeScene === null) {
      this.activeScene = scene
      this._runScene(scene)
    } else {
      // this.clearMemory()
      this.activeScene.destroy(this.game)
      this._clearEvents()
      this.activeScene = scene
      this._runScene(scene)
    }
  }

  stop() {
    this._isASceneActive()
    const activeScene = this.getActiveScene()

    activeScene.destroy()
    this.activeScene = null
  }

  _clearEvents() {
    console.log(1)
    document.body.innerHTML = document.body.innerHTML
    // document.body = document.body.cloneNode(true)
    // document.body.appendChild(document.body)
  }

  _getScene(name) {
    return this.scenes.find(scene => scene.name === name)
  }

  _runScene(scene) {
    scene.create(this.game)
    scene.render(this.game)
  }

  _isSceneExisting(caller, name) {
    if (!(this.scenes.find(scene => scene.name === name))) {
      throw new Error(`SceneManager::${caller}(): Scene '${name}' does not exist.`)
    }
  }

  _isASceneActive() {
    const activeScene = this.getActiveScene()
    if (!activeScene) {
      throw new Error("SceneManager::stop(): No scene is currently active and running.")
    }
  }
}

export default SceneManager
