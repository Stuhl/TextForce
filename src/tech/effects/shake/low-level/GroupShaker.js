import AbstractShaker from "../high-level/AbstractShaker.js"

class GroupShaker extends AbstractShaker {
  constructor(config) {
    super("GroupShaker")
    this.group = config.group
    this.duration = config.duration
    this.frequency = config.frequency
    this.direction = config.direction
    this.strength = config.strength
    this.sampleCount = (config.duration / 1000) * config.frequency
    this.samples = this._generateSamples()

    this.timer = 0
    this.intervalID = null

    this.groupX = this.group.getX()
    this.groupY = this.group.getY()

    this.events = {
      done: () => {}
    }
  }

  start() {
    this.intervalID = setInterval(this.update.bind(this), 16)
  }

  update() {
    const currentAmplitude = this.amplitude()

    if (this.timer >= this.duration) {
      clearInterval(this.intervalID)
      if (this.direction === "x") {
        this.group.translateX(this.groupX)
      }

      if (this.direction === "y") {
        this.group.translateY(this.groupY)
      }
    }

    if (this.direction === "x") {
      this.group.getElements().forEach(element => {
        const elementX = element.getX()
        const groupX = this.group.getX()
        const newGroupX = groupX - (currentAmplitude * this.strength)
      })
      this.group.translateX(this.groupX + (currentAmplitude * this.strength))
    }

    if (this.direction === "y") {
      this.group.translateY(this.groupY + (currentAmplitude * this.strength))
    }

    this.timer += 16
  }

  amplitude() {
    const sample = this.timer / 1000 * this.frequency
    const currentDecay = this.decay(this.timer)
    const previousSampleIndex = Math.floor(sample)
    const nextSampleIndex = previousSampleIndex + 1
    const previousSample = this._getSampleAtIndex(previousSampleIndex)
    const nextSample = this._getSampleAtIndex(nextSampleIndex)

    return (previousSample + (sample - previousSampleIndex) * (nextSample - previousSample)) * currentDecay
  }

  decay() {
    return (this.duration - this.timer) / this.duration
  }

  on() {

  }

  _generateSamples() {
    const samples = []

    for (let i = 0; i < this.sampleCount; i++) {
      const randomNumber = (Math.random() * 2 - 1).toFixed(3)
      samples.push(Number(randomNumber))
    }

    return samples
  }

  _getSampleAtIndex(index) {
    return this.samples[index]
  }
}

export default GroupShaker
