import wait from "../../utility/wait.js"
import AbstractEffect from "../AbstractEffect.js"

class Writer extends AbstractEffect {
  constructor(element, speed) {
    super("Writer")
    this.element = element
    this.speed   = speed
    this.events  = {
      done: () => {}
    }
    this.state   = {
      isDone: false
    }
  }

  on(event, callback) {
    if (event === "done") {
      this.events.done = callback
    }
  }

  start() {
    let timer                = this.speed
    const characters         = this.getArrayOfCharacters()
    const lastCharacterIndex = characters.length - 1

    this.element.innerHTML = ""

    characters.forEach((character, index) => {
      this.setCharacterTimeout({
        timer,
        index,
        lastCharacterIndex,
        character
      })
      timer += this.speed
    })
  }

  getArrayOfCharacters() {
    const innerHTML = this.element.innerHTML
    return Array.from(innerHTML)
  }

  setCharacterTimeout(options) {
    setTimeout(() => {
      if (options.index === options.lastCharacterIndex) {
        this._emit("done", this)
      }
      this.element.innerHTML += options.character
    }, options.timer)
  }

  _emit(event, args) {
    this.events[event](args)
  }
}

export default Writer
