import TextForce from "../../../TextForce"

import Menu      from "./menu-component"

let menu = null

const create = (scene, game) => {
  menu = new Menu(scene, game)
  menu.create()
}

const render = (scene, game) => {
  
}

const destroy = (scene, game) => {
  menu = null
}

const scene = new TextForce.Scene({
  name: "menu",
  create,
  render,
  destroy
})

export default scene
