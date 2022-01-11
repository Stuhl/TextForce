// DEPRECATED

import Item from "./Item"

class Weapon extends Item {
  constructor(options) {
    const {name, stats, price, description} = options
    super(name, price, description)
    this.stats = stats
    this.type = "Weapon"
  }

  getData() {
    return {
      name: this.name,
      price: this.price,
      desc: this.description,
      stats: this.stats,
      type: this.type
    }
  }
}

const swords = [
  new Weapon("Sword", 10, 100, "Basic sword."),
  new Weapon("Copper Sword", 15, 200, "Decent sword."),
  new Weapon("Platin Sword", 25, 400, "Good damage but expensive."),
  new Weapon("Diamond Sword", 40, 1000, "Crazy Sword but very expensive.")
]

export default Weapon
