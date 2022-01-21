const deviceEnum = {
  keyboard: "keyboard",
  gamepad: "gamepad"
}

const interfaceInputFactory = (config) => {
  if (!config.hasOwnProperty("device")) {
    throw new Error("InputFactory::create(): Missing 'device' property.")
  }

  if (typeof config.device !== "string") {
    throw new Error("InputFactory::create(): The value of property 'device' is not a string. The value must be of type <string>.")
  }

  if (!deviceEnum.hasOwnProperty(config.device)) {
    throw new Error(`InputFactory::create(): '${config.device}' is not a valid device. Valid devices are: ${getAllowedDevices()}`)
  }
}

const getAllowedDevices = () => {
  let devices = "["
  for (let key in deviceEnum) {
    devices += key + ", "
  }
  return devices.slice(0, -2) + "]"
}

export default interfaceInputFactory
