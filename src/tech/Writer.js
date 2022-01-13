class Writer {
  constructor(element, speed) {
    this.element = element
    this.speed = speed
  }

  start() {
    const innerHTML = this.element.element.innerHTML
    this.element.element.innerHTML = ""
    document.body.appendChild(this.element.element)
    let timer = this.speed

    for (let char of innerHTML) {
      setTimeout(() => {
        this.element.element.innerHTML += char
      }, timer)
      timer += this.speed
    }
  }
}

export default Writer
