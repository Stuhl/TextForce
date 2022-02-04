class EventManager {
  constructor() {
    this._events = {}
  }

  addEventListener(gameObject, event, handler) {
    if (!this._events.hasOwnProperty(event)) {
      this._events[event] = []
    }

    this._events[event].push({
      gameObject,
      handler
    })

    gameObject.element.addEventListener(event, handler)
  }

  removeAllEventListeners() {
    for (let event in this._events) {
      const eventArray = this._events[event]

      eventArray.forEach((eventObject, index) => {
        eventObject.gameObject.element.removeEventListener(event, eventObject.handler)
      })
    }

    this._reset()
  }

  _reset() {
    this._events = {}
  }

  _hasProperty(name) {
    const hasProperty = this.events.hasOwnProperty(name)
    if (!hasProperty) {
      throw new Error(this.errorHandlingTitle + " Event not found.")
    }
  }
}

export default EventManager
