class Text {
  constructor(name, innerHTML) {
    this.element = this._create(innerHTML)
    this.name    = name
    this.anchor  = "standard"

    this.originX = 0
    this.originY = 0

    this.setColor("hsla(0, 0%, 95%, 1)")
  }

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

  setX(value) {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.width / 2
      this.element.style.left = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.left = value + this.originX + "px"
    }
  }

  setY(value) {
    if (this.anchor === "center") {
      const coord  = this.getCoord()
      const offset = coord.height / 2
      this.element.style.top = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.top = value + this.originY + "px"
    }
  }

  setOriginX(value) {
    this.originX = value
  }

  setOriginY(value) {
    this.originY = value
  }

  setText(newText) {
    this.element.innerHTML = newText
  }

  setColor(hsla) {
    this.element.style.color = hsla
  }

  getCoord() {
    const coord = this.element.getBoundingClientRect()
    return {
      x: coord.x,
      y: coord.y,
      height: coord.height,
      width: coord.width
    }
  }

  scale(value) {
    this.element.style.transform = `scale(${value})`
  }

  show() {
    this.element.style.display = "block"
  }

  hide() {
    this.element.style.display = "none"
  }

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

  _create(innerHTML) {
    const text = document.createElement("PRE")
    this._setInitialStyle(text, innerHTML)

    return text
  }

  _setInitialStyle(text, innerHTML) {
    text.innerHTML       += innerHTML
    text.style.position   = "fixed"
    text.style.margin     = "0"
    text.style.cursor     = "default"
    text.style.userSelect = "none"
    text.style.display    = "none"
  }
}

export default Text
