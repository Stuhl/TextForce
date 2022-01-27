class GameMath {
  static randomInt(min, max) {
    _assertRandomInt(min, max)
    return Math.round(this.randomFloat(min, max))
  }

  static randomChoice(choices) {
    _assertRandomChoice(choices)
    return choices[this.randomInt(0, choices.length - 1)]
  }

  static scatter(base, amount) {
    _assertScatter(base, amount)
    const min = Math.floor(base - amount)
    const max = Math.floor(base + amount)
    return this.randomInt(min, max)
  }

  static forwardScatter(base, amount) {
    _assertForwardScatter(base, amount)
    return this.randomInt(base, base + amount)
  }

  static randomFloat(min, max) {
    _assertRandomFloat(min, max)
    return Math.random() * (max - min) + min
  }

  static randomBool() {
    return Math.random() > 0.5
  }

  static percentBool(percent) {
    _assertPercentBool(percent)
    return Math.random() < percent
  }
}

const _assertRandomInt = (min, max) => {
  if (!min && min !== 0) {
    throw new Error("TextForce.Math::randomInt(): Parameter 'min' cannot be falsy.")
  }

  if (typeof min !== "number") {
    throw new Error("TextForce.Math::randomInt(): Parameter 'min' is not a number. 'min' has to be of type <number>.")
  }

  if (!max && max !== 0) {
    throw new Error("TextForce.Math::randomInt(): Parameter 'max' cannot be falsy.")
  }

  if (typeof max !== "number") {
    throw new Error("TextForce.Math::randomInt(): Parameter 'max' is not a number. 'max' has to be of type <number>.")
  }

  if (min > max) {
    throw new RangeError("TextForce.Math::randomInt(): Parameter 'max' must be bigger than 'min' or the same.")
  }
}
const _assertRandomChoice = (choices) => {
  if (!choices) {
    throw new Error("TextForce.Math::randomChoice(): Parameter 'choice' cannot be falsy.")
  }

  if (!(choices instanceof Array)) {
    throw new Error("TextForce.Math::randomChoice(): Parameter 'choice' is not an array. It must be of type <array>.")
  }

  if (choices.length === 0) {
    throw new Error("TextForce.Math::randomChoice(): The array 'choices' cannot be empty. You have to have atleast 1 element.")
  }
}
const _assertScatter = (base, amount) => {
  if (!base && base !== 0) {
    throw new Error("TextForce.Math::scatter(): Parameter 'base' cannot be falsy.")
  }

  if (typeof base !== "number") {
    throw new Error("TextForce.Math::scatter(): Parameter 'base' is not a number. 'base' has to be of type <number>.")
  }

  if (!amount && amount !== 0) {
    throw new Error("TextForce.Math::scatter(): Parameter 'amount' cannot be falsy.")
  }

  if (typeof amount !== "number") {
    throw new Error("TextForce.Math::scatter(): Parameter 'amount' is not a number. 'amount' has to be of type <number>.")
  }

  if (amount < 0) {
    throw new RangeError("TextForce.Math::scatter(): Parameter 'amount' must be >= 0 (a positive number or 0).")
  }
}
const _assertForwardScatter = (base, amount) => {
  if (!base && base !== 0) {
    throw new Error("TextForce.Math::forwardScatter(): Parameter 'base' cannot be falsy.")
  }

  if (typeof base !== "number") {
    throw new Error("TextForce.Math::forwardScatter(): Parameter 'base' is not a number. 'base' has to be of type <number>.")
  }

  if (!amount && amount !== 0) {
    throw new Error("TextForce.Math::forwardScatter(): Parameter 'amount' cannot be falsy.")
  }

  if (typeof amount !== "number") {
    throw new Error("TextForce.Math::forwardScatter(): Parameter 'amount' is not a number. 'amount' has to be of type <number>.")
  }

  if (amount < 0) {
    throw new RangeError("TextForce.Math::forwardScatter(): Parameter 'amount' must be >= 0 (a positive number or 0).")
  }
}
const _assertRandomFloat = (min, max) => {
  if (!min && min !== 0) {
    throw new Error("TextForce.Math::randomFloat(): Parameter 'min' cannot be falsy.")
  }

  if (typeof min !== "number") {
    throw new Error("TextForce.Math::randomFloat(): Parameter 'min' is not a number. 'min' has to be of type <number>.")
  }

  if (!max && max !== 0) {
    throw new Error("TextForce.Math::randomFloat(): Parameter 'max' cannot be falsy.")
  }

  if (typeof max !== "number") {
    throw new Error("TextForce.Math::randomFloat(): Parameter 'max' is not a number. 'max' has to be of type <number>.")
  }

  if (min > max) {
    throw new RangeError("TextForce.Math::randomFloat(): Parameter 'max' must be bigger than 'min' or the same.")
  }
}
const _assertPercentBool = (percent) => {
  if (!percent && percent !== 0) {
    throw new Error("TextForce.Math::percentBool(): Parameter 'min' cannot be falsy.")
  }

  if (typeof percent !== "number") {
    throw new Error("TextForce.Math::percentBool(): Parameter 'min' is not a number. 'min' has to be of type <number>.")
  }

  if (percent < 0 || percent > 1) {
    throw new RangeError(`TextForce.Math::percentBool(): Parameter 'percent' has to be in range 0-1. Passed in value: ${percent}`)
  }
}

export default GameMath
