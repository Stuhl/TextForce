import AbstractInput from "./AbstractInput"

/**
 * This is the input facade class
 */
class Input extends AbstractInput {
  /**
   * @param  {(Keyboard|Gamepad)} inputDevice The input device
   * @return {Input}                          A instance of Input
   */
  constructor(inputDevice) {
    super("Input")

    /**
     * @private
     * @type {(Keyboard|Gamepad)}
     */
    this.inputDevice = inputDevice
  }

  /**
   * This attaches the Input to the game. If attached it will listen to input
   * @return {void}
   */
  attach() {
    this.inputDevice.attach()
  }

  /**
   * This removes the Input from the game. If removed it will stop listening to input
   * @return {void}
   */
  remove() {
    this.inputDevice.remove()
  }

  /**
   * Sets the listening of the input
   * @param  {boolean} state The state
   * @return {type}
   */
  setListening(state) {
    this.inputDevice.setListening(state)
  }

  /**
   * Returns true if the the input device is listening
   * @return {boolean}  Boolean indicating if the input is listening
   */
  getListening() {
    this.inputDevice.getListening(state)
  }

  /**
   * Sets a key with a corresponding output that is going to be emitted
   * @param  {string} key  The input key
   * @param  {string} name The output
   * @return {void}
   */
  setKey(key, name) {
    this.inputDevice.setKey(key, name)
  }

  /**
   * Returns an object of keys
   * @return {Object} The keys
   */
  getKeys() {
    this.inputDevice.getKeys()
  }

  /**
   * Removes a key and it's corresponding output
   * @param  {type} key The input key
   * @return {void}
   */
  removeKey(key) {
    this.inputDevice.removeKey(key)
  }

  /**
   * Attaches functions to the PubSub object of the input see {@link PubSub} for more informations
   * @param  {string}   event    The event you want to attach the function
   * @param  {Function} callback The function you want to attach
   * @return {void}
   */
  on(event, callback) {
    this.inputDevice.on(event, callback)
  }

  /**
   * Removes all of the attached events from the PubSub object of the input
   * @return {void}
   */
  resetEvents() {
    this.inputDevice.eventEmitter.reset()
  }
}

export default Input
