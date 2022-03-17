
class AbstractShaker {
  constructor(name) {
    if (!this.start) {
      throw new Error(`${name}: Missing start() implementation`)
    }

    if (!this.update) {
      throw new Error(`${name}: Missing update() implementation`)
    }

    if (!this.amplitude) {
      throw new Error(`${name}: Missing amplitude() implementation`)
    }

    if (!this.decay) {
      throw new Error(`${name}: Missing decay() implementation`)
    }

    if (!this.on) {
      throw new Error(`${name}: Missing on() implementation.`)
    }
  }
}

export default AbstractShaker
