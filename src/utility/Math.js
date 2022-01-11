class GameMath {
  constructor() {

  }

  static random(min, max) {
    return Math.random() * (max - min) + min
  }

  static randomInt(min, max) {
    return Math.round(this.random(min, max))
  }

  static randomChoice(choices) {
    return choices[this.randomInt(0, choices.length - 1)]
  }

  static randomBool() {
    return Math.random() > 0.5
  }

  static scatter(value, by) {
    const min = Math.floor(value - by)
    const max = Math.floor(value + by)
    return this.randomInt(min, max)
  }
}

export default GameMath
