const defaultConfig = {
  keys: {
    "A": "CONFIRM",
    "B": "BACK",
    "CROSS-UP": "UP",
    "CROSS-LEFT": "LEFT",
    "CROSS-DOWN": "DOWN",
    "CROSS-RIGHT": "RIGHT"
  },
  mapping: "xbox"
}

class Gamepad extends AbstractInput {
  constructor(config = defaultConfig) {
    super("Gamepad")
    this.keys = config.keys
    this.listening = false
    this.gamepad = null
    this.mapping = this._getMap(config.mapping)
  }

  update() {
    const self = this

    self.render(this._getPressedButton())
    requestAnimationFrame(self.update.bind(self))
  }

  emit() {
    this.events
  }

  render(pressed) {
    const pressedButton = document.querySelector("#pressed-button")
    pressedButton.innerHTML = "Button pressed: " + pressed
  }

  attach() {
    window.addEventListener("gamepadconnected", (event) => {
      this.gamepad = event.gamepad
      requestAnimationFrame(this.update.bind(this))
    })

    window.addEventListener("gamepaddisconnected", (event) => {
      cancelAnimationFrame(this.update.bind(this))
    })

    this.setListening(true)
  }

  remove() {
    this.setListening(false)
  }

  setListening(state) {
    this.listening = state
  }

  getListening() {
    return this.listening
  }

  setKey(key, name) {
    if (this._hasKey(key)) {
      throw new Error(`Gamepad::setKey(): Adding key failed. key '${key}' already exists.`)
    }

    this.keys[key] = name
    return true
  }

  getKeys() {
    return this.keys
  }

  removeKey(key) {
    if (!this._hasKey(key)) {
      throw new Error(`Gamepad::removeKey(): Removing key failed. '${key}' doesn't exist.`)
    }

    this.keys[key] === undefined
    return true
  }

  _getPressedButton() {
    const gamepads = navigator.getGamepads()
    const currentGamepad = gamepads[this.gamepad.index]

    const activeButtonIndex = () => {
      let targetIndex = null

      currentGamepad.buttons.forEach((button, index) => {
        if (button.pressed) {
          targetIndex = index
        }
      })

      return targetIndex
    }

    const active = activeButtonIndex()
    const mappedButton = this.mapping[active]
    const keyedButton = this.keys[mappedButton]

    return keyedButton
  }

  _hasKey(key) {
    return this.keys.hasOwnProperty(key)
  }

  _getMap(variant) {
    if (variant === "xbox") {
      return {
         0: "A",
         1: "B",
         2: "X",
         3: "Y",
         4: "LB",
         5: "RB",
         6: "LT",
         7: "RT",
         8: "SELECT",
         9: "START",
        10: "LS",
        11: "RS",
        12: "CROSS-UP",
        13: "CROSS-DOWN",
        14: "CROSS-LEFT",
        15: "CROSS-RIGHT",
        16: "CENTER"
      }
    }

    if (variant === "playstation") {
      return {
         0: "X",
         1: "CIRCLE",
         2: "SQUARE",
         3: "TRIANGLE",
         4: "L1",
         5: "R1",
         6: "L2",
         7: "R2",
         8: "SELECT",
         9: "START",
        10: "L3",
        11: "R3",
        12: "CROSS-UP",
        13: "CROSS-DOWN",
        14: "CROSS-LEFT",
        15: "CROSS-RIGHT",
        16: "CENTER"
      }
    }
  }
}

const gamepad = new Gamepad()

gamepad.attach()
