class Group {
  constructor(elements) {
    this.elements  = elements
    this.x         = 0
    this.y         = 0
    this.anchor    = {}

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
    const translateX = (element) => {
      const dom = element.element
      const x   = element.getX()
      const sum = x + value

      dom.style.left = sum + "px"
    }
    this.elements.forEach(translateX)
    this._setX(value)
  }

  translateY(value) {
    const translateY = (element) => {
      const dom = element.element
      const y   = element.getY()
      const sum = y + value

      dom.style.top = sum + "px"
    }
    this.elements.forEach(translateY)
    this._setY(value)
  }

  scale(value) {
    const scale = (element) => {
      const dom    = element.element
      const coords = element.getCoord()

      const deltaX = this.anchor.x - coords.x
      const deltaY = this.anchor.y - coords.y

      console.log("coords.x: ", coords.x)
      console.log("coords.y: ", coords.y)
      console.log("deltaX: ", deltaX)
      console.log("deltaY: ", deltaY)

      dom.style.transformOrigin = `${deltaX}px ${deltaY}px`
      dom.style.transform += `scale(${value})`
    }
    this.elements.forEach(scale)
    this._calculateAndSetAnchor()
  }

  _setX(value) {
    this.x = value
  }

  _setY(value) {
    this.y = value
  }

  _setScale(value) {
    this.scale = value
  }

  _getDOMElement(element) {
    return element.element
  }

  _executeOnAllElements(executor) {
      this.elements.forEach(element => {
        const el = this._getDOMElement(element)
        executor(el)
      })
  }

  _setup() {
    this._calculateAndSetAnchor()
  }

  _drawAnchor() {
    const anchor = document.createElement("SPAN")
    document.body.appendChild(anchor)
    anchor.style.position = "absolute"

    anchor.style.backgroundColor = "black"
    anchor.style.height          = "5px"
    anchor.style.width           = "5px"

    anchor.style.left = this.anchor.x + this.x + -2.5 + "px"
    anchor.style.top  = this.anchor.y + this.y + -2.5 + "px"
  }

  _getLeftCoordinate() {
    const xValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      xValues.push(coords.x)
    })

    return Math.min(...xValues)
  }

  _getRightCoordinate() {
    const rightValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      rightValues.push(coords.x + coords.width)
    })

    return Math.max(...rightValues)
  }

  _getTopCoordinate() {
    const yValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      yValues.push(coords.y)
    })

    return Math.min(...yValues)
  }

  _getBottomCoordinate() {
    const bottomValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      bottomValues.push(coords.y + coords.height)
    })

    return Math.max(...bottomValues)
  }

  _calculateAndSetAnchor() {
    const x      = this._getLeftCoordinate()
    const right  = this._getRightCoordinate()
    const y      = this._getTopCoordinate()
    const bottom = this._getBottomCoordinate()

    const anchorX = (x + right) / 2
    const anchorY = (y + bottom) / 2

    this.anchor = {
      x: anchorX,
      y: anchorY
    }
  }
}



export default Group
