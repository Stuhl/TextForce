/**
 * This is the Scene class. It will define the public methods that will be available for the user
 */
class Scenes {
  constructor(game) {
    this.game = game
  }

  /**
   * Starts the specified scene
   * @param  {string} name scene name
   * @param  {Object} [data] Data you can pass into the scene
   * @returns {void}
   */
  start(name, data) {
    this.game.sceneManager.start(name, data)
  }

  /**
   * @returns {void}
   */
  stop() {
    self.game.sceneManager.stop()
  }

  /**
   * Gets the current scene
   *
   * @returns {Scene} returns the current scene
   */
  getActive() {
    return self.game.sceneManager.getActiveScene()
  }
}

export default Scenes
