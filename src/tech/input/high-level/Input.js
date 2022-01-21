import AbstractInput from "./AbstractInput"

class Input extends AbstractInput {
  constructor(inputDevice) {
    super("Input")
    this.inputDevice = inputDevice
  }

  attach() {
    this.inputDevice.attach()
  }

  remove() {
    this.inputDevice.remove()
  }

  setListening(state) {
    this.inputDevice.setListening(state)
  }

  getListening() {
    this.inputDevice.getListening(state)
  }

  setKey(key, name) {
    this.inputDevice.setKey(key, name)
  }

  getKeys() {
    this.inputDevice.getKeys()
  }

  removeKey(key) {
    this.inputDevice.removeKey(key)
  }
}

export default Input
