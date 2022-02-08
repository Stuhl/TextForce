import TextForce from "../../../TextForce"

class Menu {
  constructor(scene, game) {
    this.scene         = scene
    this.game          = game

    this.startText     = new TextForce.Text("start game", "Start game")
    this.loadText      = new TextForce.Text("load game", "Load game")
    this.settingsText  = new TextForce.Text("settings", "Settings")
    this.arrow         = new TextForce.Text("arrow", ">")
    this.switchSound   = game.store.getSound("switch")
    this.bashSound     = game.store.getSound("bash")

    this.arrowState    = 0
  }

  create() {
    this._defineEvents()
    this._registerObjects()
  }

  render() {
    this.startText.show()
    this.loadText.show()
    this.settingsText.show()
    this.arrow.show()
  }

  _registerObjects() {
    this.scene.add.textObject(this.startText)
    this.scene.add.textObject(this.loadText)
    this.scene.add.textObject(this.settingsText)
    this.scene.add.textObject(this.arrow)

    this.startText.setX(100)
    this.startText.setY(100)

    this.loadText.setX(100)
    this.loadText.setY(120)

    this.settingsText.setX(100)
    this.settingsText.setY(140)

    this.arrow.setX(80)
    this.arrow.setY(100)
    this.arrow.scale(1.5)
  }

  _defineEvents() {
    this.scene.events.on("input", this.updateArrowHandler.bind(this))
  }

  updateArrow() {
    this.arrow.setY((this.arrowState * 20) + 100)
  }

  updateArrowHandler(pressed) {
    if (pressed === "UP" || pressed === "DOWN") {
      if (!this.switchSound.paused) {
        this.switchSound.stop()
      }
      this.switchSound.play()
    }

    if (pressed === "UP") {
      this.arrowState--
    }

    if (pressed === "DOWN") {
      this.arrowState++
    }

    if (this.arrowState > 2) {
      this.arrowState = 0
    }

    if (this.arrowState < 0) {
      this.arrowState = 2
    }

    if (pressed === "ENTER") {
      if (this.arrowState === 2) {
        this.bashSound.play()
        this.game.scenes.start("menu-settings", {
          score: 100
        })
      }
    }

    this.updateArrow()
  }
}

export default Menu
