class OptionsChecker {
  constructor() {

  }

  static item(options) {
    const keys = ["name", "description", "price", "stats", "type"]
    for (let key in options) {
      keys.splice(keys.indexOf(key), 1)
    }
    if (keys.length > 0) {
      throw new Error(`Missing keys: ${keys}`)
    }
  }
}
