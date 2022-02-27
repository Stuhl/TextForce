import TextForce from "../../../TextForce"

import Settings  from "./settings-component"

const storage    = new TextForce.Storage({
  name: "settings"
})

storage.saveGlobal({
  volume: 2,
  input : "keyboard"
})


const create = (scene, game) => {
  const settings = new Settings(scene, game)
  settings.init()
}

const render = (scene, game) => {

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
