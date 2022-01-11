class ErrorChecker {
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


// EXAMPLE
ErrorChecker.item({
  name: "Sword",
  price: 100,
  description: "Basic sword.",
  stats: {
    dmg: 10
  },
  type: "Weapon"
})

export default ErrorChecker
