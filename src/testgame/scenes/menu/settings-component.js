import TextForce from "../../../TextForce"

const storage    = new TextForce.Storage({
  name: "settings"
})

storage.saveGlobal({
  volume: 50,
  input : "keyboard"
})


class Settings {
  constructor(scene, game) {
    this.scene = scene
    this.game  = game

    this.controller      = new TextForce.Text("controller", "Keyboard / Controller")
    this.volume          = new TextForce.Text("volume", "Volume: ")
    this.volumeValue     = new TextForce.Text("volumeValue", "[---------------]")
    this.back            = new TextForce.Text("back", "go back")
    this.arrow           = new TextForce.Text("arrow", ">")
    this.group           = new TextForce.Group([
      this.controller,
      this.volume,
      this.volumeValue,
      this.back,
      this.arrow
    ])

    this.switchSound    = this.game.store.getSound("switch")
    this.bashSound      = this.game.store.getSound("bash")

    this.arrowState     = 0
    this.elements       = [this.controller, this.volume, this.back]
    this.currentElement = null
  }

  init() {
    this.scene.add.textObject(this.controller)
    this.scene.add.textObject(this.volume)
    this.scene.add.textObject(this.volumeValue)
    this.scene.add.textObject(this.back)
    this.scene.add.textObject(this.arrow)

    this.controller.show()
    this.volume.show()
    this.volumeValue.show()
    this.back.show()
    this.arrow.show()

    this.group.translateX(100)
    this.group.translateY(100)

    this.controller.setX(0)
    this.controller.setY(0)

    this.volume.setX(0)
    this.volume.setY(20)

    this.volumeValue.setX(60)
    this.volumeValue.setY(20)

    this.back.setX(0)
    this.back.setY(70)

    this.arrow.setX(-20)
    this.arrow.setY(0)
    this.arrow.scale(1.5)

    this._defineEvents()
  }

  _defineEvents() {
    this.scene.events.on("input", this.updateArrowHandler.bind(this))
  }

  updateArrow() {
    const currentElementY = this.currentElement.getY() - this.group.getY()
    this.arrow.setY(currentElementY)
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
        this.game.scenes.start("menu", {
          score: 100
        })
      }
    }

    this.currentElement = this.elements[this.arrowState]

    this.updateArrow()
  }
}

export default Settings
