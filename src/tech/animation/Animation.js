import TimingFunction from "./TimingFunction"

class Animation {
  constructor(config) {
    this.duration = config.duration
    this.element  = config.element
    this.effect   = config.effect

    this.timingFunction     = TimingFunction[config.timing]
    this.requestAnimationID = null

    this.now     = 0
    this.last    = 0
    this.delta   = 0
    this.counter = 0
    this.done    = false
    this.resolve = null

    this.effect = this.effect.bind(this)
  }

  loop() {
    const count    = this._getCount()
    const fraction = this._getFraction(count)
    const progress = this.timing(fraction)

    this.runEffect(progress)

    if (this.counter < this.duration) {
      this.requestAnimationID = requestAnimationFrame(this.loop.bind(this))
    } else {
      this.done = true
      cancelAnimationFrame(this.requestAnimationID)
      this.resolve(this.done)
    }
  }

  start() {
    return new Promise((resolve) => {
      this.resolve = resolve
      this.requestAnimationID = requestAnimationFrame(this.loop.bind(this))
    })
  }

  runEffect(progress) {
    this.effect(this.element, progress)
  }

  timing(fraction) {
    return this.timingFunction(fraction)
  }

  _timestamp() {
    return performance.now()
  }

  _getCount() {
    if (this.last === 0) {
      this.last = this._timestamp()
    }

    this.now      = this._timestamp()
    this.delta    = this.now - this.last
    this.last     = this.now
    this.counter += this.delta

    return this.counter
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
