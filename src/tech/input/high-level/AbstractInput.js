class AbstractInput {
  constructor(name) {
    if (!this.attach) {
      throw new Error(`${name}::attach(): Missing attach() implementation.`)
    }

    if (!this.remove) {
      throw new Error(`${name}::remove(): Missing remove() implementation.`)
    }

    if (!this.getListening) {
      throw new Error(`${name}::getListening(): Missing getListening() implementation.`)
    }

    if (!this.setKey) {
      throw new Error(`${name}::setKey(): Missing setKey() implementation.`)
    }

    if (!this.getKeys) {
      throw new Error(`${name}::getKeys(): Missing getKeys() implementation.`)
    }

    if (!this.removeKey) {
      throw new Error(`${name}::removeKey(): Missing removeKey() implementation.`)
    }

    if (!this.on) {
      throw new Error((`${name}::on(): Missing on() implementation.`))
    }
  }
}

export default AbstractInput
