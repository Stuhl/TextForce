/**
 * This is the event manager class. It will be used by {@link Scene}
 * @todo Change class name (confusing)
 */
class EventManager {
  /**
   * @return {EventManager}  A instance of EventManager
   */
  constructor() {
    /**
     * Holds all of the custom events
     * @private
     * @type {Object}
     */
    this._events = {}
  }

  /**
   * Adds a event
   * @param  {(Text|Group)} gameObject The game object
   * @param  {string}       event      A JavaScript defined event (click, mouse over etc.)
   * @param  {Function}     handler    The callback function
   * @return {void}
   */
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

  /**
   * Removes all event listeners from the current scene
   * @return {void}
   */
  removeAllEventListeners() {
    for (let event in this._events) {
      const eventArray = this._events[event]

      eventArray.forEach((eventObject, index) => {
        eventObject.gameObject.element.removeEventListener(event, eventObject.handler)
      })
    }

    this._reset()
  }

  /**
   * @ignore
   */
  _reset() {
    this._events = {}
  }

  /**
   * @ignore
   */
  _hasProperty(name) {
    const hasProperty = this.events.hasOwnProperty(name)
    if (!hasProperty) {
      throw new Error(this.errorHandlingTitle + " Event not found.")
    }
  }
}

export default EventManager
