class BattleCalculator {
  constructor() {

  }

  static _scatter(value, by) {
    const min = Math.floor(value - by)
    const max = Math.floor(value + by)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  static attack(from, to) {
    if (to.isDefending) {
      to.def *= 2
    }

    const dmg = (from.str - (to.def / 2)) / 2
    const scattered = this._scatter(dmg, 2)
    return scattered > 0 ? scattered : 0
  }
}

export default BattleCalculator
