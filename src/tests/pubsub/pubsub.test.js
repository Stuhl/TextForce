import PubSub from "../../tech/pubsub/PubSub"

describe("PubSub", () => {

  describe("subscribe()", () => {
    it ("should throw error when 'name' argument is falsy", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.subscribe(null, callback)
      }).toThrow("PubSub::subscribe(): Parameter 'name' cannot be falsy or missing.")
    })

    it ("should throw error when 'name' argument is not string", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.subscribe(5, callback)
      }).toThrow("PubSub::subscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    })

    it ("should throw error when 'callback' argument is falsy", () => {
      const pubsub = new PubSub()

      expect(() => {
        pubsub.subscribe("player_hurt", null)
      }).toThrow("PubSub::subscribe(): Parameter 'callback' cannot be falsy or missing.")
    })

    it ("should throw error when 'callback' argument is not a function", () => {
      const pubsub   = new PubSub()
      const callback = 5

      expect(() => {
        pubsub.subscribe("player_hurt", callback)
      }).toThrow("PubSub::subscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    })

  })

  describe("unsubscribe()", () => {
    it ("should throw error when 'name' argument is falsy", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.unsubscribe(null, callback)
      }).toThrow("PubSub::unsubscribe(): Parameter 'name' cannot be falsy or missing.")
    })

    it ("should throw error when 'name' argument is not string", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.unsubscribe(5, callback)
      }).toThrow("PubSub::unsubscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    })

    it ("should throw error when 'callback' argument is falsy", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.unsubscribe("player_hurt", null)
      }).toThrow("PubSub::unsubscribe(): Parameter 'callback' cannot be falsy or missing.")
    })

    it ("should throw error when 'callback' argument is not a function", () => {
      const pubsub   = new PubSub()
      const callback = 5

      expect(() => {
        pubsub.unsubscribe("player_hurt", callback)
      }).toThrow("PubSub::unsubscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    })

    it ("should throw error when event is not registered in the system", () => {
      const pubsub   = new PubSub()
      const callback = () => {}

      expect(() => {
        pubsub.unsubscribe("player_hurt", callback)
      }).toThrow("PubSub::unsubscribe(): Event 'player_hurt' is not registered in the PubSub system.")
    })
  })

  describe("publish()", () => {
    it ("should throw error when 'name' argument is falsy", () => {
      const pubsub = new PubSub()

      expect(() => {
        pubsub.publish()
      }).toThrow("PubSub::publish(): Parameter 'name' cannot be falsy or missing.")
    })

    it ("should throw error when 'name' argument is not string", () => {
      const pubsub = new PubSub()

      expect(() => {
        pubsub.publish(5)
      }).toThrow("PubSub::publish(): Parameter 'name' is not a string. Has to be of type <string>.")
    })

    it ("should throw error when event is not registered in the system", () => {
      const pubsub   = new PubSub()

      expect(() => {
        pubsub.publish("player_hurt")
      }).toThrow("PubSub::publish(): Event 'player_hurt' is not registered in the PubSub system.")
    })
  })
})
