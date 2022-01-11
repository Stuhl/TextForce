// DEPRECATED

import Item from "./Item"

class Potion extends Item {
  constructor(options) {
    const {name, price, description, kind, value} = options
    super(name, price, description)
    this.type = "Potion"
    this.kind = kind
    this.value = value
  }

  getData() {
    return {
      name: this.name,
      price: this.price,
      desc: this.description,
      type: this.type,
      value: this.value
    }
  }
}

export default Potion
