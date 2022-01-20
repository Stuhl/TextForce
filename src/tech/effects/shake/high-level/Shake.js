import AbstractEffect from "../../AbstractEffect.js"

import GroupShaker from "../low-level/GroupShaker.js"
import ObjectShaker from "../low-level/ObjectShaker.js"

class Shake {
  constructor(config) {
    this.type = config.type
    this.shakerConfig = config.shakerConfig
    this.shaker = this._getShaker()

    // console.log(this.shaker)
  }

  start() {
    this.shaker.start()
  }

  update() {
    this.shaker.update()
  }

  amplitude() {
    this.shaker.amplitude()
  }

  decay() {
    this.shaker.decay()
  }

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
