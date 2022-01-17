class Group {
  constructor(elements) {
    this.elements = elements
  }

  translateX(value) {
    this.elements.forEach(element => {
      const currentX = element.getX()
      element.setX(currentX + value)
    })
  }

  translateY(value) {
    this.elements.forEach(element => {
      const currentY = element.getY()
      element.setY(currentY + value)
    })
  }

  scale(value) {
    this.elements.forEach(element => {
      element.scale(value)
    })
  }
}



export default Group
