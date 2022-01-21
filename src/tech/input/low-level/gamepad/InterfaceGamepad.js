const interfaceGamepad = (config) => {
  assertKeys(config)
  assertMapping(config)
  assertEventEmitter(config)
}

const assertKeys = (config) => {
  if (!config.hasOwnProperty("keys")) {
    throw new Error("Gamepad::constructor(): Missing 'keys' property.")
  }

  if (typeof config.keys !== "object") {
    throw new Error("Gamepad::constructor(): The value of property 'keys' is not a object. The value must be of type <object>.")
  }
}
const assertMapping = (config) => {
  const validMaps = ["xbox", "playstation"]

  if (!config.hasOwnProperty("mapping")) {
    throw new Error("Gamepad::constructor(): Missing 'mapping' property.")
  }

  if (typeof config.mapping !== "string") {
    throw new Error("Gamepad::constructor(): The value of property 'mapping' is not a string. The value must be of type <string>.")
  }

  if (!(validMaps.find(map => map === config.mapping))) {
    const mapsToString = validMaps.join().replace(/,/, ", ")
    throw new Error(`Gamepad::constructor(): The value of 'mapping' is not a valid map. Valid maps are: [${mapsToString}].`)
  }
}
const assertEventEmitter = (config) => {
  if (!config.hasOwnProperty("eventEmitter")) {
    throw new Error("Gamepad::constructor(): Missing 'eventEmitter' property. The config must have a eventEmitter property.")
  }

  if (typeof config.eventEmitter !== "object") {
    throw new Error("Gamepad::constructor(): The value of property 'eventEmitter' is not a object. The value must be of type <object>.")
  }
}

export default interfaceGamepad
