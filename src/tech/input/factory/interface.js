const deviceEnum = {
  keyboard: "keyboard",
  gamepad: "gamepad"
}

const getAllowedDevices = () => {
  let devices = "["
  for (let key in deviceEnum) {
    devices += key + ", "
  }
  return devices.slice(0, -2) + "]"
}

export default (config) => {
  if (!config.device) {
    throw new Error("InputFactory::create(): Property 'device' is missing.")
  }

  if (!deviceEnum.hasOwnProperty(config.device)) {
    throw new Error(`InputFactory::create(): Device '${config.device}' is not a allowed device.\nAllowed devices: ${getAllowedDevices()}`)
  }
}
