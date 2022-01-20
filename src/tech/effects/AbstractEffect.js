class AbstractEffect {
  constructor(name) {
    if (!this.start) {
      throw new Error(`${name}: Missing start() implementation.`)
    }

    if (!this.on) {
      throw new Error(`${name}: Missing on() implementation.`)
    }
  }
}

export default AbstractEffect
