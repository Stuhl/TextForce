class AssetStorage {
  constructor(game, Sound) {
    this.game  = game
    this.Sound = Sound
  }

  getStore() {
    const self = this

    return {
      sound(name, path) {
        const soundFile = new self.Sound(name, path)
        self.game.soundStorage.append(soundFile)
      },
      getSound(name) {
        return self.game.soundStorage.get(name)
      }
    }
  }
}

export default AssetStorage
