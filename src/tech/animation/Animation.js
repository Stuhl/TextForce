import TimingFunction from "./TimingFunction"

class Animation {
  constructor(config) {
    this.duration = config.duration
    this.element  = config.element
    this.effect   = config.effect

    this.timing   = TimingFunction[config.timing]
    this.done     = false
    this.resolve  = null

    this.effect = this.effect.bind(this)
  }

  loop(milliseconds) {
    const fraction = this._getFraction(milliseconds)
    const progress = this.timing(fraction)

    this.runEffect(progress)

    if (milliseconds < this.duration) {
      requestAnimationFrame(this.loop.bind(this))
    } else {
      this.done = true
      this.resolve(this.done)
    }
  }

  start() {
    return new Promise((resolve) => {
      this.resolve = resolve
      requestAnimationFrame(this.loop.bind(this))
    })
  }

  runEffect(progress) {
    this.effect(this.element, progress)
  }

  timing(fraction) {
    return this.timingFunction(fraction)
  }

  _getFraction(milliseconds) {
    let fraction = milliseconds / this.duration

    if (fraction > 1) {
      fraction = 1
    }

    return fraction
  }
}

export default Animation
