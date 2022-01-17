class Text {
  constructor(element, name, innerHTML) {
    this.element = document.createElement(element)
    this.name = name
    this.element.innerHTML += innerHTML
    this.element.style.position = "fixed"
    this.element.style.margin = "0"
    this.anchor = "standard"
  }

  getX() {
    if (this.anchor === "center") {
      const coord = this.getCoord()
      const offset = coord.width / 2
      return (value - offset)
    }

    if (this.anchor === "standard") {

      return this.getCoord().x
    }
  }

  getY() {
    if (this.anchor === "center") {
      const coord = this.getCoord()
      const offset = coord.height / 2
      return (value - offset)
    }

    if (this.anchor === "standard") {
      return this.getCoord().y
    }
  }

  setX(value) {
    if (this.anchor === "center") {
      const coord = this.getCoord()
      const offset = coord.width / 2
      this.element.style.left = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.left = value + "px"
    }
  }

  setY(value) {
    if (this.anchor === "center") {
      const coord = this.getCoord()
      const offset = coord.height / 2
      this.element.style.top = (value - offset) + "px"
    }

    if (this.anchor === "standard") {
      this.element.style.top = value + "px"
    }
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

  setID(name) {
    this.element.id = name
  }
}

export default Text
