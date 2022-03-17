import AbstractPubSub from "./abstract-PubSub.js"


/**
 * This is the PubSub class. Use this to create a event bus objects for your game
 */
class PubSub extends AbstractPubSub {
  /**
   * @return {PubSub}  A instance of PubSub
   */
  constructor() {
    super()

    /**
     * Holds all events
     * @private
     * @type {Object} events
     */
    this.events = {}
  }

  /**
   * Publishes (emits) an event. if the event is not defined then the method will return
   * @param  {string} name   The name of the event
   * @param  {any}    [args] Optional arguments that will be passed to the listening functions
   * @return {void}
   */
  publish(name, args) {
    this._assertPublish(name)

    if (!this.events[name]) {
      return
    }

    for (let callback of this.events[name]) {
      callback(args)
    }
  }

  /**
   * Subscribe (register) to a event. If the event is not defined it will create a entry in {@link events}
   * @param  {string}   name     The name of the event
   * @param  {Function} callback The function that will be called when the emits gets emitted
   * @return {void}
   */
  subscribe(name, callback) {
    this._assertSubscribe(name, callback)

    this.events[name] = this.events[name] ? this.events[name].concat(callback) : [callback]
  }

  /**
   * Unsubscribe from an event. If the event is empty it will delete the event from {@link events}
   * @param  {type} name     description
   * @param  {type} callback description
   * @return {type}          description
   */
  unsubscribe(name, callback) {
    this._assertUnsubscribe(name, callback)

    const targetArray = this.events[name]
    const index       = targetArray.indexOf(callback)

    if (index === -1) {
      throw new Error(`PubSub::unsubscribe(): Callback '${callback.name}()' not found in event '${name}'.`)
    }

    targetArray.splice(index, 1)

    if (targetArray.length === 0) {
      delete this.events[name]
    }
  }

  /**
   * Deletes all events
   * @return {void}
   */
  reset() {
    this.events = {}
  }

  /**
   * @ignore
   */
  _assertPublish(name) {
    if (!name) {
      throw new Error(`PubSub::publish(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::publish(): Parameter 'name' is not a string. Has to be of type <string>.")
    }
  }

  /**
   * @ignore
   */
  _assertSubscribe(name, callback) {
    if (!name) {
      throw new Error(`PubSub::subscribe(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (!callback) {
      throw new Error(`PubSub::subscribe(): Parameter 'callback' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::subscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    }

    if (typeof callback !== "function") {
      throw new TypeError("PubSub::subscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    }
  }

  /**
   * @ignore
   */
  _assertUnsubscribe(name, callback) {
    if (!name) {
      throw new Error(`PubSub::unsubscribe(): Parameter 'name' cannot be falsy or missing.`)
    }

    if (!callback) {
      throw new Error(`PubSub::unsubscribe(): Parameter 'callback' cannot be falsy or missing.`)
    }

    if (typeof name !== "string") {
      throw new TypeError("PubSub::unsubscribe(): Parameter 'name' is not a string. Has to be of type <string>.")
    }

    if (typeof callback !== "function") {
      throw new TypeError("PubSub::unsubscribe(): Parameter 'callback' is not a function. Has to be of type <function>.")
    }

    if (!this.events.hasOwnProperty(name)) {
      throw new Error(`PubSub::unsubscribe(): Event '${name}' is not registered in the PubSub system.`)
    }
  }
}

export default PubSub
