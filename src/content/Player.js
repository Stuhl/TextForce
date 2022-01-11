import Entity from "./Entity"

const nextLvlExp = (lvl) => {
  return Math.pow(lvl, 3) + 30
}

class Player extends Entity {
  constructor(maxHP = 30, currentHP = 30, currentMP = 10, maxMP = 10, strength = 10, exp = 0, lvl = 1) {
    super(maxHP, currentHP, currentMP, maxMP, strength, exp)
    this.lvl = lvl
    this.maxExp = nextLvlExp(this.lvl)
    this._items = []
    this._equippedWeapon = null
    this._equippedArmor = null
  }

  isLvlUp() {
    return this.exp >= this.maxExp
  }

  addExp(exp) {
    this.exp += exp
  }

  levelUp() {
    this.lvl += 1
    this.updateStats()
  }

  updateStats() {
    this._maxHP += 5
    this._maxMP += 2
    this._strength += 3
    this.maxExp = nextLvlExp(this.lvl)
  }

  getItems() {
    return this.items
  }

  setWeapon(weapon) {
    this._equippedWeapon = weapon
  }

  setArmor(armor) {
    this._equippedArmor = armor
  }

  getWeapon() {
    return this._equippedWeapon
  }

  getArmor() {
    return this._equippedArmor
  }
}

export default Player
