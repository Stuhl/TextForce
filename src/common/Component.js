// Abstract Class component
// Inspired by React components

class Component {
  constructor() {
    this.firstRender = true

    if (this.render === undefined) {
      throw new Error("Missing method: render")
    }

    if (this.init === undefined) {
      throw new Error("Missing method: init")
    }

    if (this.update === undefined) {
      throw new Error("Missing method: update")
    }

    // if (this.mount === undefined) {
    //   throw new Error("Missing method: mount")
    // }
  }
}

export default Component
