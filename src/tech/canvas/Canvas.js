/**
 * This is the canvas class. It's used for the background of the game
 * @namespace TextForce.Canvas
 */
class Canvas {
  /**
   * @param  {CanvasConfig} config A canvas configuration object
   * @return {Canvas}              A instance of the canvas class
   */
  constructor(config) {
    /**
     * Width of the canvas in pixel
     * @type {number} width
     * @public
     */
    this.width   = config.width

    /**
     * Height of the canvas in pixel
     * @type {number} height
     * @public
     */
    this.height  = config.height

    /**
     * the HTML element used as the canvas element
     * @type {HTMLElement} element
     * @public
     */
    this.element = this._createCanvas()

    this.setBackgroundColor(config.background)
    document.body.appendChild(this.element)
  }

  /**
   * Sets the color of the canvas
   * @param  {string} hsla a hsla() string (see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla())
   * @return {void}
   */
  setBackgroundColor(hsla) {
    this.element.style.backgroundColor = hsla
  }


  /**
   * @ignore
   */
  _createCanvas() {
    const gameArea = document.createElement("DIV")
    this._setInitialStyle(gameArea, this.width, this.height)
    return gameArea
  }

  /**
   * @ignore
   */
  _setInitialStyle(gameArea, width, height) {
    gameArea.id               = "game-canvas"
    gameArea.style.width      = this.width
    gameArea.style.height     = this.height
    gameArea.style.position   = "fixed"
    gameArea.style.padding    = "0"
    gameArea.style.margin     = "0"
    gameArea.style.zIndex     = "-1"
    gameArea.style.userSelect = "none"
  }
}

export default Canvas
