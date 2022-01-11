class SoundManager {
  constructor() {
    this.sounds = []
    this.mute = false
    this.volume = 1
  }

  add(sound) {
    this.sounds.push(sound)
  }

  get(name) {
    return this.sounds.find(sound => sound.name === name)
  }

  getAll() {
    return this.sounds
  }

  pauseAll() {
    for (let sound of this.sounds) {
      sound.pause()
    }
  }

  remove(name) {
    const sound = this.sounds.find(sound => sound.name === name)
    this.sounds.splice(sound)
  }

  removeAll() {
    this.sounds = []
  }

  playAll() {
    for (let sound of this.sounds) {
      sound.play()
    }
  }

  stopAll() {
    for (let sound of this.sounds) {
      sound.stop()
    }
  }

  setVolumeAll(volume) {
    for (let sound of this.sounds) {
      sound.setVolume(volume)
    }
  }
}

export default SoundManager
