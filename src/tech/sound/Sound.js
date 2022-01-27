class Sound {
  constructor(name, path) {
    this._assertConstructor(name, path)
    this.name  = name
    this.audio = new Audio(path)
  }

  play() {
     this.audio.play().then(_ => {})
  }

  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
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

  _assertConstructor(name, path) {
    if (!name) {
      throw new Error("Sound::constructor(): Parameter 'name' cannot be falsy.")
    }

    if (typeof name !== "string") {
      throw new TypeError("Sound::constructor(): Parameter 'name' is not a string. 'name' must be of type <string>.")
    }

    if (!path) {
      throw new Error("Sound::constructor(): Parameter 'path' cannot be falsy.")
    }

    if (typeof name !== "string") {
      throw new TypeError("Sound::constructor(): Parameter 'path' is not a string. 'path' must be of type <string>.")
    }
  }
  _assertVolume(value) {
    if (!value && value !== 0) {
      throw new Error("Sound::setVolume(): Parameter 'value' can't be falsy (except 0).")
    }

    if (typeof value !== "number") {
      throw new TypeError("Sound::setVolume(): Parameter 'value' must be of type number.")
    }

    if (value > 1 || value < 0) {
      throw new RangeError("Sound::setVolume(): Parameter 'value' needs to be in range 0-1")
    }
  }
}

export default Sound
