import TextForce from "./TextForce"

const start        = new TextForce.Text("start game", "start game")
const load         = new TextForce.Text("load game", "load game")
const settings     = new TextForce.Text("settings", "settings")
const arrow        = new TextForce.Text("arrow", ">")

const eventEmitter = new TextForce.PubSub()
const keyboard     = new TextForce.Keyboard({
  keys: {
    "w"    : "UP",
    "s"    : "DOWN",
    "Enter": "ENTER"
  },
  eventEmitter: eventEmitter
})

keyboard.attach()

const updateArrow = (arrowState) => {
  arrow.setY((arrowState * 20) + 100)
}

const updateArrowHandler = (pressed) => {
  console.log("press")
  if (pressed === "UP") {
    arrowState--
  }

  if (pressed === "DOWN") {
    arrowState++
  }

  if (arrowState > 2) {
    arrowState = 0
  }

  if (arrowState < 0) {
    arrowState = 2
  }

  if (pressed === "ENTER") {
    console.log(1)
    scene.sceneManager.start("ingame")
  }

  updateArrow(arrowState)
}

const create = (scene) => {
  let arrowState = 0

  const updateArrowHandler = (pressed) => {
    console.log("press")
    if (pressed === "UP") {
      arrowState--
    }

    if (pressed === "DOWN") {
      arrowState++
    }

    if (arrowState > 2) {
      arrowState = 0
    }

    if (arrowState < 0) {
      arrowState = 2
    }

    if (pressed === "ENTER") {
      console.log(1)
      scene.sceneManager.start("ingame")
    }

    updateArrow(arrowState)
  }

  scene.add.textObject(start)
  scene.add.textObject(load)
  scene.add.textObject(settings)
  scene.add.textObject(arrow)

  start.setX(100)
  start.setY(100)

  load.setX(100)
  load.setY(120)

  settings.setX(100)
  settings.setY(140)

  arrow.setX(80)
  arrow.setY(100)
  arrow.scale(1.5)

  keyboard.on("input", updateArrowHandler)
}

const render = (scene) => {
  start.show()
  load.show()
  settings.show()
  arrow.show()
}

const destroy = (scene) => {
  scene.remove.textObject(start)
  scene.remove.textObject(load)
  scene.remove.textObject(settings)
  scene.remove.textObject(arrow)
  keyboard.off("input", updateArrowHandler)
}

const scene = new TextForce.Scene({
  name: "scene1",
  create,
  render,
  destroy
})

export default scene
