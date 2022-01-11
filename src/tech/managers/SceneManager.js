import Scene from "../Scene"

class SceneManager {
  constructor(game) {
    this.currentScene = null
    this.scenes = []
    this.game = game
  }

  _isSceneExisting(name) {
    if (this.scenes.find(scene => scene.name === name)) {

    } else {
      throw new Error(`SceneManager error: Missing scene ${name}`)
    }
  }

  add(scene) {
    this.scenes.push(scene)
  }

  _getScene(name) {
    return this.scenes.find(scene => scene.name === name)
  }

  _runScene(scene) {
    scene.create()
    scene.render()
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
    this._isSceneExisting(name)
    const scene = this._getScene(name)

    if (this.currentScene === null) {
      this.currentScene = scene
      this._runScene(scene)
    } else {
      this.clearMemory()
      this.currentScene = scene
      this._runScene(scene)
    }
  }
  //
  // shutdown(scene) {
  //   const manager = this.game.objectManager
  //   this.currentScene.destroy()
  //   manager.reset()
  // }
}

const menu = new Scene({
  name: "menu",
  create: () => console.log("creating stuff"),
  destroy: () => console.log("destroying shit"),
  render: () => console.log("rendering ...")
})

const ingame = new Scene({
  name: "ingame",
  create: () => console.log("creating stuff"),
  destroy: () => console.log("destroying shit"),
  render: () => console.log("rendering ...")
})

const gameOver = new Scene({
  name: "gameOver",
  create: () => console.log("creating stuff"),
  destroy: () => console.log("destroying shit"),
  render: () => console.log("rendering ...")
})

export default SceneManager
