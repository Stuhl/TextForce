import Entity from "./Entity"

class Enemy extends Entity {
  constructor(options) {
    const {name, hp, mp, type, exp, strength, actions, potions} = options
    super(hp, hp, mp, mp, strength, exp)
    this.name = name
    this.type = type
    this.actions = actions
    this.potion = potions
  }
}


// Example
const wolf = new Enemy({
  name: "Wolf",
  hp: 10,
  mp: 0,
  strength: 5,
  type: "Wolf",
  exp: 5,
  actions: ["Attack", "Defend", "Use Potion"],
  potions: 2
})

wolf.act = function() {
  if (this._currentHP <= 5 && this.potion > 0) {
      return "Use Potion"
    }

  const randomNum = Math.random()
  return randomNum >= 0.8 ? "Defend" : "Attack"
}

export default Enemy
