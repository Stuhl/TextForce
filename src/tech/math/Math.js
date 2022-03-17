/**
 * The Game math class. Use this to ease certain battle calculations like generating a random integer etc.
 */
class GameMath {
  /**
   * Returns a random integer in a range
   * @static
   * @param  {number} min The minimum range
   * @param  {number} max The maximum range
   * @return {number}     The generated integer
   */
  static randomInt(min, max) {
    _assertRandomInt(min, max)
    return Math.round(this.randomFloat(min, max))
  }

  /**
   * Returns a random selection from an array of items
   * @static
   * @param  {any[]} choices The array of choices (could be strings, numbers, booleans etc.)
   * @return {any}           The random selection
   */
  static randomChoice(choices) {
    _assertRandomChoice(choices)
    return choices[this.randomInt(0, choices.length - 1)]
  }

  /**
   * Returns a random scattered integer. It's possible to have negative integers too
   * @static
   * @param  {number} base   The base value
   * @param  {number} amount The amount by which the base can scatter around
   * @return {number}        The random scattered integer
   */
  static scatter(base, amount) {
    _assertScatter(base, amount)
    const min = Math.floor(base - amount)
    const max = Math.floor(base + amount)
    return this.randomInt(min, max)
  }

  /**
   * Same as {@link GameMath#scatter} but only positive integers
   * @static
   * @param  {number} base   The base value
   * @param  {number} amount The amount by which the base can scatter around
   * @return {number}        The random scattered integer
   */
  static forwardScatter(base, amount) {
    _assertForwardScatter(base, amount)
    return this.randomInt(base, base + amount)
  }

  /**
   * Returns a random float in a range
   * @static
   * @param  {number} min The minimum range
   * @param  {number} max The maximum range
   * @return {number}     The generated float
   */
  static randomFloat(min, max) {
    _assertRandomFloat(min, max)
    return Math.random() * (max - min) + min
  }

  /**
   * Returns a random boolean. The probabality for both true and false is 50%
   * @static
   * @return {boolean}  The generated boolean
   */
  static randomBool() {
    return Math.random() > 0.5
  }

  /**
   * Returns a random boolean which you can control by specifying a probabality
   * @static
   * @param  {number} probabality A probablity in the range of 0-1. For example 0.7 = 70%
   * @return {type}               The random boolean.
   * @example <caption>To get the idea across</caption>
   * GameMath.percentBool(0.5) // Is the same as GameMath.randomBool()
   * GameMath.percentBool(1) // 1 = 100%. Meaning every returned boolean will be true
   * GameMath.percentBool(0) // 0 = 0%. Meaning every returned boolean will be false
   */
  static percentBool(probabality) {
    _assertPercentBool(probabality)
    return Math.random() < probabality
  }
}


/**
 * @ignore
 */
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

/**
 * @ignore
 */
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

/**
 * @ignore
 */
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

/**
 * @ignore
 */
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

/**
 * @ignore
 */
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

/**
 * @ignore
 */
const _assertPercentBool = (probabality) => {
  if (!probabality && probabality !== 0) {
    throw new Error("TextForce.Math::percentBool(): Parameter 'probabality' cannot be falsy.")
  }

  if (typeof probabality !== "number") {
    throw new Error("TextForce.Math::percentBool(): Parameter 'probabality' is not a number. 'min' has to be of type <number>.")
  }

  if (probabality < 0 || probabality > 1) {
    throw new RangeError(`TextForce.Math::percentBool(): Parameter 'probabality' has to be in range 0-1. Passed in value: ${percent}`)
  }
}

export default GameMath
