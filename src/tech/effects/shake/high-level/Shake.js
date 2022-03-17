import AbstractEffect from "../../AbstractEffect.js"
import GroupShaker    from "../low-level/GroupShaker.js"
import ObjectShaker   from "../low-level/ObjectShaker.js"

/**
 * This is the Shake class. Use this to have camera or object shake effects
 */
class Shake {
  /**
   * @param  {ShakeConfig} config A shake configuration object
   * @return {Shake}              A instance of Shake
   */
  constructor(config) {
    /**
     * The type of shake
     * @private
     * @type {string}
     */
    this.type         = config.type

    /**
     * The shaker configuration object
     * @private
     * @type {ShakeConfig.shakerConfig}
     */
    this.shakerConfig = config.shakerConfig

    /**
     * Holds the shaker variant
     * @private
     * @type {(ObjectShaker|GroupShaker)}
     */
    this.shaker       = this._getShaker()
  }

  /**
   * Starts the shaking effect
   * @return {void}
   */
  start() {
    this.shaker.start()
  }

  /**
   * @ignore
   */
  update() {
    this.shaker.update()
  }

  /**
   * @ignore
   */
  amplitude() {
    this.shaker.amplitude()
  }

  /**
   * @ignore
   */
  decay() {
    this.shaker.decay()
  }

  /**
   * @ignore
   */
  _getShaker() {
    if (this.type === "object") {
      return new ObjectShaker(this.shakerConfig)
    }

    if (this.type === "group") {
      return new GroupShaker(this.shakerConfig)
    }
  }
}

export default Shake
