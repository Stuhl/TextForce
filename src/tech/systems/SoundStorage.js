class SoundStorage {
  constructor() {
    this.sounds = []
    this.mute = false
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
}

export default SoundStorage
