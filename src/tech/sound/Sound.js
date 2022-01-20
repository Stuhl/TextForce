class Sound {
  constructor(name, path) {
    this.name  = name
    this.audio = new Audio(path)
  }

  play() {
     this.audio.play().then(_ => {})
  }

  stop() {
    this.audio.pause()
  }

  pause() {
    this.audio.pause()
  }

  setVolume(value) {
    this._assertVolume(value)
    this.audio.volume = value
  }

  loop() {
    this.audio.loop = true
  }

  noLoop() {
    this.audio.loop = false
  }

  getState() {
    return {
      playing: !this.audio.paused,
       paused: this.audio.paused,
      looping: this.audio.loop
    }
  }

  _assertVolume(value) {
    if (!value && value !== 0) {
      throw new Error("Sound::setVolume(): Parameter 'value' can't be falsy (except 0).")
    }

    if (typeof value !== "number") {
      throw new TypeError("Sound::setVolume(): Parameter 'value' must be of time number.")
    }

    if (value > 1 || value < 0) {
      throw new RangeError("Sound::setVolume(): Parameter 'value' needs to be in range 0-1")
    }
  }
}

export default Sound
