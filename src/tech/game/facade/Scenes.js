class Scenes {
  constructor(game) {
    this.game = game
  }

  getScenes() {
    const self = this

    return {
      start(name, data) {
        self.game.sceneManager.start(name, data)
      },
      stop() {
        self.game.sceneManager.stop()
      },
      getActive() {
        return self.game.sceneManager.getActiveScene()
      }
    }
  }
}

export default Scenes
