class AbstractInput {
  constructor(name) {
    if (!this.attach) {
      throw new Error(`${name}: Missing attach() implementation`)
    }

    if (!this.remove) {
      throw new Error(`${name}: Missing remove() implementation`)
    }

    if (!this.setListening) {
      throw new Error(`${name}: Missing setListening() implementation`)
    }

    if (!this.getListening) {
      throw new Error(`${name}: Missing getListening() implementation`)
    }

    if (!this.setKey) {
      throw new Error(`${name}: Missing setKey() implementation`)
    }

    if (!this.getKeys) {
      throw new Error(`${name}: Missing getKeys() implementation`)
    }

    if (!this.removeKey) {
      throw new Error(`${name}: Missing removeKey() implementation`)
    }
  }
}

export default AbstractInput
