class Queue {
  constructor(ms) {
    this.elements = []
    this.ms = ms
  }

  add(element) {
    this.elements.push(element)
  }

  start() {
    let timer = this.ms
    for (let elem of this.elements) {
      const writer = new Writer(elem, 30)
      setTimeout(() => {
        writer.start()
      }, timer)
      timer += this.ms
    }
  }
}

export default Queue
