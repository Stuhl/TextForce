import TextForce    from "../TextForce"

import menuScene    from "./scenes/menu/menuScene"
import menuSettings from "./scenes/menu/settingsScene"

import ingameScene  from "./scenes/ingame/ingameScene"

const game = new TextForce.Game({
  input: {
    device: "keyboard",
    keys: {
      "w": "UP",
      "a": "LEFT",
      "s": "DOWN",
      "d": "RIGHT",
      "Enter": "ENTER",
      "Backspace": "BACK"
    }
  },
  scenes: [menuScene, menuSettings, ingameScene],
  activeScene: "menu",
  preload() {

  }
})


console.log(game)
