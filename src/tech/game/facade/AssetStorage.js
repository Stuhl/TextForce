class AssetStorage {
  constructor(game, Sound) {
    /**
     * A instance of the Game class
     * @private
     * @type {Game} game
     */
    this.game  = game
    /**
     * A instance of the Sound class
     * @private
     * @type {Sound} sound
     */
    this.Sound = Sound
  }

  getStore() {
    const self = this

    return {
      /**
       * Use this method to add sounds to the storage
       * @public
       * @param  {string} name The name of the sound
       * @param  {string} path The path to the sound file
       * @return {void}
       */
      sound(name, path) {
        const soundFile = new self.Sound(name, path)
        self.game.soundStorage.append(soundFile)
      },
      /**
       * Use this method to get sounds from the storage
       *
       * @param  {string} name The name of the sound
       * @return {void}
       */
      getSound(name) {
        return self.game.soundStorage.get(name)
      }
    }
  }
}

export default AssetStorage
