const configInterface = (config) => {
  if (!config.keys) {
    throw new Error("ConfigInterface::Gamepad: Missing 'keys' property.")
  }

  if (!config.mapping) {
    throw new Error("ConfigInterface::Gamepad: Missing 'mapping' property.")
  } 
}

export default configInterface
