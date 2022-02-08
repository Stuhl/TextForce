import TextForce from "../../../TextForce"

const volume     = new TextForce.Text("volume", "change volume")
const volume2    = new TextForce.Text("volume2", "change volume")
const volume3    = new TextForce.Text("volume3", "change volume")
const score      = new TextForce.Text("score", "High score:")
const scoreValue = new TextForce.Text("scoreValue", "")


const create = (scene, game) => {
  scene.add.textObject(volume)
  scene.add.textObject(volume2)
  scene.add.textObject(volume3)
  scene.add.textObject(volume3)
  scene.add.textObject(score)
  scene.add.textObject(scoreValue)


  volume.setX(200)
  volume.setY(200)

  volume2.setX(200)
  volume2.setY(220)

  volume3.setX(200)
  volume3.setY(240)

  score.setX(100)
  score.setY(100)

  scoreValue.setX(190)
  scoreValue.setY(100)
  scoreValue.setText(scene.data.score)
}

const render = (scene, game) => {
  volume.show()
  volume2.show()
  volume3.show()
  score.show()
  scoreValue.show()
}

const destroy = (scene, game) => {

}

const scene = new TextForce.Scene({
  name: "menu-settings",
  create,
  render,
  destroy
})

export default scene
