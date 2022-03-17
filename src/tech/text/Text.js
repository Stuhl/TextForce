/**
 * The text class. Use this to create text objects for your game.
 */
class Text {
  /**
   * @param  {string} name      name of the text object
   * @param  {string} innerHTML content of the text object
   * @return {Text}             instance of Text
   */
  constructor(name, innerHTML) {
    /**
     * The HTML element
     * @type {HTMLElement} element
     * @private
     */
    this.element = this._create(innerHTML)

    /**
     * The name
     * @type {string} name
     * @private
     */
    this.name    = name

    /**
     * The anchor
     * @type {string} anchor
     * @private
     */
    this.anchor  = "standard"

    this.setColor("hsla(0, 0%, 95%, 1)")
  }

  /**
   * Returns the x coordinate
   * @return {number} The x coordinate
   */
  getX() {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.width / 2
      return (value - offset)
    }

    if (this.anchor === "standard") {
      return this.getCoord().x
    }
  }

  /**
   * Returns the y coordinate
   * @return {number} The y coordinate
   */
  getY() {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.height / 2
      return (value - offset)
    }

    if (this.anchor === "standard") {
      return this.getCoord().y
    }
  }

  /**
   * Sets the x coordinate
   * @param  {number} value The value in pixels
   * @return {void}
   */
  setX(value) {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.width / 2
      this.element.style.left = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.left = value + "px"
    }
  }

  /**
   * Sets the y coordinate
   * @param  {number} value The value in pixels
   * @return {void}
   */
  setY(value) {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.height / 2
      this.element.style.top = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.top = value + "px"
    }
  }

  /**
   * Sets the content (innerHTML)
   * @param  {string} newText The text
   * @return {void}
   */
  setText(newText) {
    this.element.innerHTML = newText
  }

  /**
   * Sets the color
   * @param  {string} hsla hsla() string. See https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla()
   * @return {void}
   */
  setColor(hsla) {
    this.element.style.color = hsla
  }

  /**
   * Gets the Bounding client rect. See https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   * @return {Coord}  A coord object
   * @todo Might change method name
   */
  getCoord() {
    const coord = this.element.getBoundingClientRect()
    return {
      x: coord.x,
      y: coord.y,
      height: coord.height,
      width: coord.width
    }
  }

  /**
   * Scales the text object
   * @param  {number} value In percent e.g. 1 = 100%, 2 = 200% etc.
   * @return {void}
   */
  scale(value) {
    this.element.style.transform += `scale(${value})`
  }

  /**
   * Rotates the text object
   * @param  {number} degrees In degrees e.g. 0-360
   * @return {void}
   */
  rotate(degrees) {
    this.element.style.transform += `rotate(${degrees}deg)`
  }

  /**
   * Shows the text object
   * @return {void}
   */
  show() {
    this.element.style.visibility = "visible"
  }

  /**
   * Hides the text object
   * @return {type}  description
   */
  hide() {
    this.element.style.visibility = "hidden"
  }

  /**
   * Sets the anchor
   * @param  {string} name Possible names: [standard, center]
   * @return {void}
   * @todo Change this later to a class implementation
   */
  setAnchor(name) {
    const names = {
      standard: 0,
      center: 1
    }

    const num = names[name]

    if (num === undefined) {
      throw new Error("Specified anchor is not defined.")
    }
    if (num === 0) {
      this.anchor = "standard"
    } else if (num === 1) {
      this.anchor = "center"
    }
  }

  /**
   * @ignore
   */
  _create(innerHTML) {
    const text = document.createElement("PRE")
    this._setInitialStyle(text, innerHTML)

    return text
  }

  /**
   * @ignore
   */
  _setInitialStyle(text, innerHTML) {
    text.innerHTML       += innerHTML
    text.style.position   = "fixed"
    text.style.margin     = "0"
    text.style.cursor     = "default"
    text.style.userSelect = "none"
    text.style.display    = "block"
  }
}

export default Text
