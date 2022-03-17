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
  canvas: {
    width     : 500,
    height    : 500,
    background: "hsla(0, 0%, 5%, 1)"
  },
  scenes: [menuScene, menuSettings, ingameScene],
  activeScene: "menu",
  preload(game) {
    const switchSound = new URL("./assets/switch.wav", import.meta.url)
    const bashSound   = new URL("./assets/bash.wav", import.meta.url)

    game.store.sound("switch", switchSound.href)
    game.store.sound("bash", bashSound.href)
  }
})
