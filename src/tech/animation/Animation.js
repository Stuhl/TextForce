import TimingFunction from "./TimingFunction"

/**
 * The animation class. It can be used to make transition animations, fade in and out animations etc.
 */
class Animation {

  /**
   * @param  {AnimationConfig} config The animation configuration
   * @return {Animation}
   */
  constructor(config) {
    /**
     * The animation duration
     * @type {number} duration - The duration in milliseconds
     * @private
     * @ignore
     */
    this.duration = config.duration

    /**
     * The element text object's element
     * @type {HTMLElement} element
     * @private
     * @ignore
     */
    this.element  = config.element

    /**
     * The effect that should be run
     * @type {Function} effect
     * @private
     * @ignore
     */
    this.effect   = config.effect

    /**
     * The timing function that is going to be used for the animation
     * @type {TimingFunction} timingFunction
     * @private
     * @ignore
     */
    this.timingFunction     = TimingFunction.get(config.timing)

    /**
     * @ignore
     */
    this.requestAnimationID = null

    /**
     * @ignore
     */
    this.now                = 0

    /**
     * @ignore
     */
    this.last               = 0

    /**
     * @ignore
     */
    this.delta              = 0

    /**
     * @ignore
     */
    this.counter            = 0

    /**
     * @ignore
     */
    this.done               = false

    /**
     * @ignore
     */
    this.resolve            = null

    /**
     * @ignore
     */
    this.effect             = this.effect.bind(this)
  }

  /**
   * Adds a custom timing function
   * @static
   * @param  {string}   name           The name of the function
   * @param  {Function} timingFunction The timing function
   * @return {void}
   */
  static addTimingFunction(name, timingFunction) {
    TimingFunction.add(name, timingFunction)
  }

  /**
   * Returns a list of all registered functions
   * @static
   * @return {string[]}  The array of ALL timing functions (built-in and custom defined)
   */
  static getAllTimingFunctions() {
    TimingFunction.getAllTimingFunctions()
  }

  /**
   * Use this to start the animation
   * @return {Promise}  Returns a promise that will resolve once the animation is finished
   */
  start() {
    return new Promise((resolve) => {
      this.resolve = resolve
      this.requestAnimationID = requestAnimationFrame(this._loop.bind(this))
    })
  }

  /**
   * @ignore
   */
  _loop() {
    const count    = this._getCount()
    const fraction = this._getFraction(count)
    const progress = this._timing(fraction)

    _this.runEffect(progress)

    if (this.counter < this.duration) {
      this.requestAnimationID = requestAnimationFrame(this.loop.bind(this))
    } else {
      this.done = true
      cancelAnimationFrame(this.requestAnimationID)
      this.resolve(this.done)
    }
  }

  /**
   * @ignore
   */
  _runEffect(progress) {
    this.effect(this.element, progress)
  }

  /**
   * @ignore
   */
  _timing(fraction) {
    return this.timingFunction(fraction)
  }

  /**
   * @ignore
   */
  _timestamp() {
    return performance.now()
  }

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  _getFraction(milliseconds) {
    let fraction = milliseconds / this.duration

    if (fraction > 1) {
      fraction = 1
    }

    return fraction
  }
}

export default Animation
