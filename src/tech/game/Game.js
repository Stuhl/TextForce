import Input from "./Input"
import Text from "./Text"
import Storage from "./Storage"
import EventManager from "./managers/EventManager"
import ObjectManager from "./managers/ObjectManager"
import SoundManager from "./managers/SoundManager"
import SceneManager from "./managers/SceneManager"

class Game {
  constructor(config = {
    root: "#game"
  }) {
    this.parent = document.querySelector(config.root)
    this.input = new Input(config.keys)
    this.storage = new Storage()
    this.eventManager = new EventManager()
    this.objectManager = new ObjectManager()
    this.soundManager = new SoundManager()
    this.sceneManager = new SceneManager(this)

    this.add = {
      element: this._addElement.bind(this)
    }
  }

  getCoord() {
    const coord = this.parent.getBoundingClientRect()
    return {
      x: coord.x,
      y: coord.y,
      height: coord.height,
      width: coord.width
    }
  }

  _addElement(object) {
    this.objectManager.add(object)

    if (object.constructor.name === "Element") {
      this.parent.appendChild(object.element)
    } else {
      object.render()
    }

    return object
  }
}

export default Game
