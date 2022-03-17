/**
 * The group class. Use this class to group together text objects
 */
class Group {
  /**
   *
   * @param  {Text[]} elements An array of text elements
   * @return {Group}           A instance of the group class
   */
  constructor(elements) {
    /**
     * Array of text objects
     * @type {Text[]} elements
     * @private
     */
    this.elements  = elements

    /**
     * x coordinate of the group object
     * @type {number} x
     * @private
     */
    this.x         = 0

    /**
     * y coordinate of the group object
     * @type {number} y
     * @private
     */
    this.y         = 0

    /**
     * anchor object with x and y properties
     * @type {Anchor} anchor
     * @private
     */
    this.anchor    = {}

    this._setup()
  }

  /**
   * Updates the anchor by calculating the bounds of the group.
   * @return {void}
   */
  updateAnchor() {
    this._calculateAndSetAnchor()
  }

  /**
   * Returns the x coordinate of the group (not considering the anchor)
   * @return {number}  The x coordinate
   */
  getX() {
    return this.x
  }

  /**
   * Return the y coordinate of the group (not considering the anchor)
   * @return {number}  The y coordinate
   */
  getY() {
    return this.y
  }

  /**
   * Returns an array of the group elements (copy by reference)
   * @return {Text[]}  The array of the group elements
   */
  getElements() {
    return this.elements
  }

  /**
   * Translates (moves) the group on the x-axis.
   * @param  {number} value The amount in pixels
   * @return {void}
   */
  translateX(value) {
    const translateX = (element) => {
      const dom = element.element
      const x   = element.getX()
      const sum = x + value

      dom.style.left = sum + "px"
    }
    this.elements.forEach(translateX)
    this._setX(value)
    this.updateAnchor()
  }

  /**
   * Translates (moves) the group on the y-axis.
   * @param  {number} value The amount in pixels
   * @return {void}
   */
  translateY(value) {
    const translateY = (element) => {
      const dom = element.element
      const y   = element.getY()
      const sum = y + value

      dom.style.top = sum + "px"
    }
    this.elements.forEach(translateY)
    this._setY(value)
    this.updateAnchor()
  }

  /**
   * Scales the group. Uses the anchor as origin point
   * @param  {number} value The amount in percent e.g. 1 = 100%, 2 = 200% etc.
   * @return {void}          
   */
  scale(value) {
    const scale = (element) => {
      const dom    = element.element
      const coords = element.getCoord()
      const deltaX = this.anchor.x - coords.x
      const deltaY = this.anchor.y - coords.y

      dom.style.transformOrigin = `${deltaX}px ${deltaY}px`
      dom.style.transform += `scale(${value})`
    }
    this.elements.forEach(scale)
    this.updateAnchor()
  }


  /**
   * @ignore
   */
  _setX(value) {
    this.x = value
  }

  /**
   * @ignore
   */
  _setY(value) {
    this.y = value
  }

  /**
   * @ignore
   */
  _setScale(value) {
    this.scale = value
  }

  /**
   * @ignore
   */
  _getDOMElement(element) {
    return element.element
  }

  /**
   * @ignore
   */
  _setup() {
    this._calculateAndSetAnchor()
  }

  /**
   * @ignore
   */
  _drawAnchor() {
    const anchor = document.createElement("SPAN")
    document.body.appendChild(anchor)

    anchor.style.position        = "absolute"
    anchor.style.backgroundColor = "black"
    anchor.style.height          = "5px"
    anchor.style.width           = "5px"

    anchor.style.left = this.anchor.x + -2.5 + "px"
    anchor.style.top  = this.anchor.y + -2.5 + "px"
  }

  /**
   * @ignore
   */
  _getLeftCoordinate() {
    const xValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      xValues.push(coords.x)
    })

    return Math.min(...xValues)
  }

  /**
   * @ignore
   */
  _getRightCoordinate() {
    const rightValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      rightValues.push(coords.x + coords.width)
    })

    return Math.max(...rightValues)
  }

  /**
   * @ignore
   */
  _getTopCoordinate() {
    const yValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      yValues.push(coords.y)
    })

    return Math.min(...yValues)
  }

  /**
   * @ignore
   */
  _getBottomCoordinate() {
    const bottomValues = []

    this.elements.forEach(element => {
      const coords = element.getCoord()
      bottomValues.push(coords.y + coords.height)
    })

    return Math.max(...bottomValues)
  }

  /**
   * @ignore
   */
  _calculateAndSetAnchor() {
    const x       = this._getLeftCoordinate()
    const right   = this._getRightCoordinate()
    const y       = this._getTopCoordinate()
    const bottom  = this._getBottomCoordinate()
    const anchorX = (x + right) / 2
    const anchorY = (y + bottom) / 2

    this.anchor = {
      x: anchorX,
      y: anchorY
    }
  }
}



export default Group
