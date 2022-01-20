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

  setX(value) {
    this.x = value
  }

  setY(value) {
    this.y = value
  }

  getElements() {
    return this.elements
  }

  translateX(value) {
    this.elements.forEach(element => {
      const currentX = element.getX() - this.getX()
      element.setX(currentX + value)
    })

    this.setX(value)
  }

  translateY(value) {
    this.elements.forEach(element => {
      const currentY = element.getY()
      element.setY(currentY + value)
      this.setY(value)
    })
  }

  scale(value) {
    this.elements.forEach(element => {
      element.scale(value)
    })
  }
}



export default Group
