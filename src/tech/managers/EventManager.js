import PubSub from "../PubSub"

class EventManager {
  constructor() {
    this.events = {}
    this.errorHandlingTitle = "EventManager Error:"
  }

  _hasProperty(name) {
    const hasProperty = this.events.hasOwnProperty(name)
    if (!hasProperty) {
      throw new Error(this.errorHandlingTitle + " Event not found.")
    }
  }

  register(name) {
    this.events[name] = this.events[name] || new PubSub()
    return this.events[name]
  }

  unregister(name) {
    this._hasProperty(name)
    delete this.events[name]
  }

  get(name) {
    this._hasProperty(name)
    return this.events[name]
  }
}

export default EventManager
