class Group {
  constructor(elements) {
    this.elements = elements
    this.x        = 0
    this.y        = 0
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

  translateX(value) {
    this.elements.forEach(element => {
      const elementX = element.getX()

      element.setOriginX(value)
      element.setX(elementX)
    })

    this._setX(value)
  }

  translateY(value) {
    this.elements.forEach(element => {
      const currentY = element.getY()

      element.setOriginY(value)
      element.setY(currentY)
    })

    this._setY(value)
  }

  scale(value) {
    this.elements.forEach(element => {
      element.scale(value)
    })
  }

  _setX(value) {
    this.x = value
  }

  _setY(value) {
    this.y = value
  }
}



export default Group
