class Canvas {
  constructor(config) {
    this.width   = config.width
    this.height  = config.height
    this.element = this._createCanvas()

    this.setBackgroundColor(config.background)
    document.body.appendChild(this.element)
  }

  setBackgroundColor(hsla) {
    this.element.style.backgroundColor = hsla
  }

  _createCanvas() {
    const gameArea = document.createElement("DIV")
    this._setInitialStyle(gameArea, this.width, this.height)
    return gameArea
  }

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
