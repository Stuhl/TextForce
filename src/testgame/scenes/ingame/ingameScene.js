import TextForce from "../../../TextForce"

const ingame = new TextForce.Text("ingame", "You are ingame.")

const create = (scene) => {
  scene.add.textObject(ingame)

  ingame.setX(100)
  ingame.setY(100)
}


const render = (scene) => {
  const ingameText = scene.objectManager.get("ingame")
  ingame.show()
}

const destroy = (scene) => {
  scene.remove.textObject(test)
}

const scene = new TextForce.Scene({
  name: "ingame",
  create,
  render,
  destroy
})

export default scene
