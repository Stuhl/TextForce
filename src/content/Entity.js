class Entity {
  constructor(maxHP, currentHP, currentMP, maxMP, strength, exp) {
    this._maxHP = maxHP
    this._currentHP = currentHP
    this._maxMP = maxMP
    this._currentMP = currentMP
    this._strength = strength
    this.isAlive = true
    this.exp = exp
  }

  getData() {
    return {
      maxHP: this._maxHP,
      currentHP: this._currentHP,
      maxMP: this._maxMP,
      currentMP: this._currentMP,
      strength: this._strength
    }
  }

  hasEnoughMana(amount) {
    return this._currentMP >= amount
  }

  lose(key, amount) {
    const keys = ["hp", "mp"]
    const attribute = keys.find(item => item === key)
    if (attribute === undefined) {
      throw new Error("No such key: " + key)
    }

    if (attribute === "hp") {
      this._currentHP -= amount
    }

    if (attribute === "mp") {
      this._currentMP -= amount
    }
  }

  gain(key, amount) {
        const keys = ["hp", "mp"]
    const attribute = keys.find(item => item === key)
    if (attribute === undefined) {
      throw new Error("No such key: " + key)
    }

    if (attribute === "hp") {
      this._currentHP += amount
      if (this._currentHP > this._maxHP) {
        this._currentHP = this._maxHP
      }
    }

    if (attribute === "mp") {
      this._currentMP += amount
      if (this._currentMP > this._maxMP) {
        this._currentMP = this._maxMP
      }
    }
  }
}

export default Entity
