/**
 * The sound class. Use this to create sound objects. Uses [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
 */
class Sound {
  /**
   * @param  {string} name The name of the sound. Will be used as identifier by other modules
   * @param  {string} path The path of the sound file
   * @return {Sound}       A instance of the Sound class
   */
  constructor(name, path) {
    this._assertConstructor(name, path)

    /**
     * Holds the name of the sound
     * @private
     * @type {string} name
     */
    this.name  = name

    /**
     * Holds the Audio. See [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
     * @private
     * @type {Audio} audio
     */
    this.audio = new Audio(path)
  }

  /**
   * Plays the sound
   * @return {void}
   */
  play() {
     this.audio.play().then(_ => {})
  }

  /**
   * Stops the sound and resets the current playback location to 0
   * @return {void}
   */
  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }

  /**
   * Pauses the sound. Retains the current playback state
   * @return {void}
   */
  pause() {
    this.audio.pause()
  }

  /**
   * Sets the volume of the sound
   * @param  {number} value The amount the volume should change. Can be a number in the range 0-1
   * @return {void}
   */
  setVolume(value) {
    this._assertVolume(value)
    this.audio.volume = value
  }

  /**
   * Sets looping of the sound to true e.g. when the sound is played it will loop
   * @return {void}
   */
  loop() {
    this.audio.loop = true
  }

  /**
   * Sets the looping of the sound to false e.g. when the sound is played it won't loop
   * @return {void}
   */
  noLoop() {
    this.audio.loop = false
  }


  /**
   * @ignore
   */
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

  /**
   * @ignore  
   */
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
