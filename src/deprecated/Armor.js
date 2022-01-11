// DEPRECATED

import Item from "./Item"

class Armor extends Item {
  constructor(options) {
    const {name, value, price, description} = options
    super(name, price, description)
    this.value = value
    this.type = "Armor"
  }

  getData() {
    return {
      name: this.name,
      price: this.price,
      desc: this.description,
      value: this.value,
      type: this.type
    }
  }
}


const armor = [
  new Armor({
    name: "Vest",
    price: 100,
    value: 5,
    description: "Adventurer's vest."
  }),
  new Armor({
    name: "Cloth Armor",
    price: 200,
    value: 10,
    description: "Decent defensive measure."
  }),
  new Armor({
    name: "Chainmail",
    price: 500,
    value: 20,
    description: "Basic Armor of the City Guard."
  }),
  new Armor({
    name: "Plated Chest Armor",
    price: 1000,
    value: 35,
    description: "General's Armor."
  })
]


export default Armor
