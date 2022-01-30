import GameMath from "../../tech/math/Math"

describe("GameMath", () => {

  describe("randomInt()", () => {
    it ("should return a random whole number between 1-5 for min = 1, max = 5", () => {
      const min = 1
      const max = 5

      const result = GameMath.randomInt(min, max)
      const whole  = Math.round(result)

      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
      expect(result).toBe(whole)
    })
  })

  describe("randomFloat()", () => {
    it ("should return a random float number between 1-5 for min = 1, max = 5", () => {
      const min = 1
      const max = 5

      const result = GameMath.randomFloat(min, max)

      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
    })
  })

  describe("scatter()", () => {
    it ("should return a random whole number between 5-15 for base = 10, amount = 5", () => {
      const base   = 10
      const amount = 5

      const result = GameMath.scatter(base, amount)
      const whole  = Math.round(result)

      expect(result).toBeGreaterThanOrEqual(base - amount)
      expect(result).toBeLessThanOrEqual(base + amount)
      expect(result).toBe(whole)
    })
  })

  describe("forwardScatter()", () => {
    it ("should return a random whole number between 10-15 for base = 10, amount = 5", () => {
      const base   = 10
      const amount = 5

      const result = GameMath.forwardScatter(base, amount)
      const whole  = Math.round(result)

      expect(result).toBeGreaterThanOrEqual(base)
      expect(result).toBeLessThanOrEqual(base + amount)
      expect(result).toBe(whole)
    })
  })

  describe("randomChoice()", () => {
    it ("should return 'ATTACK' or 'DEFEND' for choices = ['ATTACK', 'DEFEND']", () => {
      const choices = ['ATTACK', 'DEFEND']

      const result = GameMath.randomChoice(choices)

      expect(choices).toContain(result)
    })
  })

  describe("randomBool()", () => {
    it ("should return true or false", () => {
      const result = GameMath.randomBool()

      expect([true, false]).toContain(result)
    })
  })

  describe("percentBool()", () => {
    it ("should most likely return false for probabality = 0.1", () => {
      const probabality = 0.1

      const result = GameMath.percentBool(probabality)

      expect(result).toBe(false)
    })

    it ("should most likely return true for probabality = 0.9", () => {
      const probabality = 0.9

      const result = GameMath.percentBool(probabality)

      expect(result).toBe(true)
    })
  })
})
