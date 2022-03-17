/**
 * The sound storage class. This will be used by the {@link Game} class to handle storage of the sounds
 */
class SoundStorage {
  /**
   * @return {SoundStorage}
   */
  constructor() {
    /**
     * Holds all the sounds
     * @private
     * @type  {Sound[]} sounds
     */
    this.sounds = []

    /**
     * Whether or not the sounds are muted
     * @private
     * @type {boolean} mute
     */
    this.mute   = false

    /**
     * Boolean indiciating if sounds can be played
     * @private
     * @type {boolean} soundsReady
     */
    this.soundsReady = false

    /**
     * Volume of all sounds
     * @private
     * @type {number} volume
     */
    this.volume = 1
  }

  /**
   * Adds the sound into the storage
   * @param  {Sound} sound The sound object
   * @return {void}
   */
  append(sound) {
    this.sounds.push(sound)
  }

  /**
   * Returns the sound if found in the storage
   * @param  {string} name       The name of the sound
   * @return {(Sound|undefined)} The sound object or undefined if not found
   */
  get(name) {
    return this.sounds.find(sound => sound.name === name)
  }

  /**
   * Returns an array of all the sounds that are in the storage
   * @return {Sound[]} An array of sounds
   */
  getAll() {
    return this.sounds
  }

  /**
   * Removes all sounds from the storage
   * @return {void}
   */
  removeAll() {
    this.sounds = []
  }

  /**
   * Changes the volume of all sounds in the storage
   * @param  {number} volume The volume amount. Can be a number in the range of 0-1
   * @return {void}
   */
  setVolumeAll(volume) {
    for (let sound of this.sounds) {
      sound.setVolume(volume)
    }

    this.mute   = volume === 0
    this.volume = volume
  }

  /**
   * Returns a promise that resolves when all sounds are ready to be played
   * @return {Promise}  A promise that resolves when all sounds are loaded and ready to be played
   */
  soundsAreReady() {
    return new Promise(resolve => {
      const readySounds  = []
      const soundsAmount = this.sounds.length

      let counter = 0

      for (let sound of this.sounds) {
        sound.audio.addEventListener("canplaythrough", (event) => {
          counter++
          if (counter === soundsAmount) {
            this.soundsReady = true
            resolve("done")
          }
        })
      }
    })
  }
}

export default SoundStorage
