/**
 * The game configuration
 * @typedef  {Object}        GameConfig  - The game configuration
 * @property {InputConfig}   input       - The input device you want to use
 * @property {CanvasConfig}  canvas      - The canvas properties
 * @property {Array}         scenes      - An array that holds the defined scenes
 * @property {string}        activeScene - The scene that is being run when the game starts
 * @property {Function}      preload     - The preload function. Use this to preload assets, like sound
 *
 * @example <caption>Example configuration</caption>
 * {
 *  input: {
 *    device: "keyboard",
 *    keys: {
 *      "w": "UP",
 *      "a": "LEFT",
 *      "s": "DOWN",
 *      "d": "RIGHT",
 *      "Enter": "ENTER",
 *      "Backspace": "BACK"
 *    }
 *  },
 *  canvas: {
 *    width     : 500,
 *    height    : 500,
 *    background: "hsla(0, 0%, 5%, 1)"
 *  },
 *  scenes: [menuScene, menuSettings, ingameScene],
 *  activeScene: "menu",
 *  preload(game) {
 *    const switchSound = new URL("./assets/switch.wav", import.meta.url)
 *    const bashSound   = new URL("./assets/bash.wav", import.meta.url)
 *
 *    game.store.sound("switch", switchSound.href)
 *    game.store.sound("bash", bashSound.href)
 *  }
 *}
 */

 globalNS.method1 = function (a, b) {
     return b / a;
 };
