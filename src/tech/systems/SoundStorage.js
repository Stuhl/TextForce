class SoundStorage {
  constructor() {
    this.sounds = []
    this.mute   = false
    this.volume = 1
  }

  append(sound) {
    this.sounds.push(sound)
  }

  get(name) {
    return this.sounds.find(sound => sound.name === name)
  }

  getAll() {
    return this.sounds
  }

  removeAll() {
    this.sounds = []
  }

  setVolumeAll(volume) {
    for (let sound of this.sounds) {
      sound.setVolume(volume)
    }
  }

  soundsAreReady() {
    return new Promise(resolve => {
      const readySounds  = []
      const soundsAmount = this.sounds.length

      let counter = 0

      for (let sound of this.sounds) {
        sound.audio.addEventListener("canplaythrough", (event) => {
          counter++
          if (counter === soundsAmount) {
            resolve("done")
          }
        })
      }
    })
  }
}

export default SoundStorage
