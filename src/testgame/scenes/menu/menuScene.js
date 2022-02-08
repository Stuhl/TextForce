import TextForce from "../../../TextForce"

import Menu      from "./menu-component"

let menu = null

const create = (scene, game) => {
  menu = new Menu(scene, game)
  menu.create()
}

const render = (scene, game) => {
  menu.render()
}

const destroy = (scene, game) => {

}

const scene = new TextForce.Scene({
  name: "menu",
  create,
  render,
  destroy
})

export default scene
