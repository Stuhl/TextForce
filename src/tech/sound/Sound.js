class Sound {
  constructor(path, name) {
    this.name = name
    this._root = new Audio(path + name)
    this.duration = this._root.duration
    this.isPlaying = false
    this.isPaused = true
    this.isLooping = false
  }

  play() {
     this._root.play()
     this.isPaused = false
  }

  stop() {
    this._root.pause()
    this._root.currentTime = 0
    this.isPlaying = false
    this.isPaused = true
  }

  pause() {
    this._root.pause()
    this.isPaused = true
    this.isPlaying = false
  }

  setVolume(volume) {
    if (volume > 1 || volume < 0) {
      throw new Error("The volumne needs to be in range 0-1. You passed in: " + volume)
    }
    this._root.volume = volume
  }

  setLoop(bool) {
    this._root.loop = bool
    this.isLooping = bool
  }
}

export default Sound
