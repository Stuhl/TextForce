class Group {
  constructor(elements) {
    this.container = document.createElement("DIV")
    this.elements  = elements
    this.x         = 0
    this.y         = 0

    this._setup()
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  getElements() {
    return this.elements
  }

  getContainer() {
    return this.container
  }

  translateX(value) {
    this.container.style.left = value + "px"
    // this.elements.forEach(element => {
    //   const elementX = element.getX()
    //
    //   element.setX(elementX + value)
    // })

    this._setX(value)
  }

  translateY(value) {
    this.container.style.top = value + "px"
    //
    // this.elements.forEach(element => {
    //   const currentY = element.getY()
    //
    //   element.setY(currentY + value)
    // })

    this._setY(value)
  }

  scale(value) {
    // this.container.style.transform = "top left"
    this.container.style.transform += `scale(${value})`
    // this.elements.forEach(element => {
    //   element.scale(value)
    // })
  }

  _setX(value) {
    this.x = value
  }

  _setY(value) {
    this.y = value
  }

  _setup() {
    this._setInitialStyle()
    for (let element of this.elements) {
      this.container.appendChild(element.element)
      element.element.style.position = "absolute"
    }
  }

  _setInitialStyle() {
    this.container.style.position = "relative"
    this.container.style.margin   = 0
    this.container.style.padding  = 0
  }
}



export default Group
