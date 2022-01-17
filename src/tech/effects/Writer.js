import wait from "../utility/wait.js"

class Writer {
  constructor(element, speed) {
    this.element = element
    this.speed = speed
    this.state = {
      isDone: false
    }
    this.onDoneCallback = () => {}
  }

  resetState() {
    this.state = {
      isDone: false
    }
  }

  setIsDone(state) {
    this.state.isDone = state
  }

  done() {
    this.onDoneCallback(this)
  }

  on(event, callback) {
    if (event === "done") {
      this.onDoneCallback = callback
    }
  }

  start() {
    const innerHTML = this.element.innerHTML
    let timer = this.speed
    let characterCounter = 0
    const lastCharacterIndex = innerHTML.length - 1

    console.log(lastCharacterIndex === characterCounter)

    this.element.innerHTML = ""

    Array.from(innerHTML).forEach((character, index) => {
      setTimeout(() => {
        if (index === lastCharacterIndex) {
          this.done()
        }
        this.element.innerHTML += character
      }, timer)
      timer += this.speed
    })
  }
}

export default Writer
