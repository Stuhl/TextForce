class GameMath {
  static randomInt(min, max) {
    return Math.round(this.randomFloat(min, max))
  }

  static randomChoice(choices) {
    return choices[this.randomInt(0, choices.length - 1)]
  }

  static scatter(base, amount) {
    const min = Math.floor(base - amount)
    const max = Math.floor(base + amount)
    return this.randomInt(min, max)
  }

  static forwardScatter(base, amount) {
    return this.randomInt(base, base + amount)
  }

  static randomFloat(min, max) {
    return Math.random() * (max - min) + min
  }

  static randomBool() {
    return Math.random() > 0.5
  }

  static percentBool(percent) {
    return Math.random() > percent
  }
}

console.log(GameMath.forwardScatter(5, 10))

export default GameMath
