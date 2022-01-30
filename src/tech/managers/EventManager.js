class EventManager {
  constructor() {
    this.events = {}
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

  _hasProperty(name) {
    const hasProperty = this.events.hasOwnProperty(name)
    if (!hasProperty) {
      throw new Error(this.errorHandlingTitle + " Event not found.")
    }
  }
}

export default EventManager
