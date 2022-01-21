const interfaceKeyboard = (config) => {
  if (!config.hasOwnProperty("keys")) {
    throw new Error("Keyboard::constructor(): Missing 'keys' property. The config must have a keys property.")
  }

  if (!config.hasOwnProperty("eventEmitter")) {
    throw new Error("Keyboard::constructor(): Missing 'eventEmitter' property. The config must have a eventEmitter property.")
  }

  if (typeof config.eventEmitter !== "object") {
    throw new Error("Keyboard::constructor(): The value of property 'eventEmitter' is not a object. The value must be of type <object>.")
  }

  if (typeof config.keys !== "object") {
    throw new Error("Keyboard::constructor(): The value of property 'keys' is not a object. The value must be of type <object>.")
  }
}

export default interfaceKeyboard
