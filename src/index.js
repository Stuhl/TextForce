import TextForce from "./TextForce"


const testGame = () => {
  class Player {
    constructor() {
      this.hp = 100
      this.damage = 10
    }

    attack() {
      return TextForce.Math.forwardScatter(this.damage, 50)
    }
  }

  class Enemy {
    constructor() {
      this.hp = 50
      this.damage = 5
    }

    attack() {
      return TextForce.Math.scatter(this.damage, 2)
    }
  }


  const enemyHealth = document.querySelector("#enemy-health")
  const playerHealth = document.querySelector("#player-health")
  const enemyDamage = document.querySelector("#enemy-damage")
  const playerDamage = document.querySelector("#player-damage")

  const attackButton = document.querySelector("button")

  const player = new Player()
  const enemy = new Enemy()

  enemyHealth.innerHTML = `Enemy Health: ${enemy.hp}`
  playerHealth.innerHTML = `Player Health: ${player.hp}`

  attackButton.addEventListener("click", () => {
    const playerAttack = player.attack()
    const enemyAttack = enemy.attack()

    enemy.hp -= playerAttack
    player.hp -= enemyAttack

    if (enemy.hp <= 0) {
      console.log("ENEMY DEAD BRO STOP HITTIN HIM")
    }

    enemyHealth.innerHTML = `Enemy Health: ${enemy.hp}`
    playerHealth.innerHTML = `Player Health: ${player.hp}`
    enemyDamage.innerHTML = `The enemy dealt <span style="color: red;">${enemyAttack}</span> Damage!`
    playerDamage.innerHTML = `You dealt <span style="color: green;">${playerAttack}</span> Damage!`

  })
}

// testGame()


const testGameClass = () => {
  const codSound = new URL("./test_assets/lvl_up_sound.mp3", import.meta.url)

  const game = new TextForce.Game({
    input: {
      device: "keyboard",
      keys: {
        "w": "UP",
        "a": "LEFT",
        "s": "DOWN",
        "d": "RIGHT",
        "Enter": "CONFIRM",
        "Backspace": "BACK"
      }
    },
    preload() {
      this.store.sound("lvl up sound", codSound.href)
    }
  })

  const scene = new TextForce.Scene({
    name: "test scene",
    create: () => {
      console.log("creating ...")
    },
    render: () => {
      console.log("rendering ...")
    },
    destroy: () => {
      console.log("destroying ...")
    }
  })
  const scene2 = new TextForce.Scene({
    name: "test scene 2",
    create: (game) => {
      const text = new TextForce.Game.Text("pre", "hello", "Hello and welcome")

      game.objectManager.append(text)
      const textCopy = game.objectManager.get("hello")

      console.log(game)
      game.objectManager.delete(text)
      console.log(game.objectManager)
    },
    render: (game) => {
      // const text = game.objectManager.get("hello")
      // document.body.appendChild(text.element)

    },
    destroy: () => {
      console.log("destroying ... and going funky")
    }
  })

  const switchSceneButton = document.createElement("BUTTON")
  switchSceneButton.innerHTML = "Press to switch scene to scene 2"

  document.body.appendChild(switchSceneButton)

  switchSceneButton.addEventListener("click", () => {
    game.sceneManager.stop("test scene 2")
  })

  game.sceneManager.append(scene)
  game.sceneManager.append(scene2)

  game.sceneManager.start("test scene 2")

  // game.sceneManager.start("test scene")
  // game.sceneManager.start("test scene 2")
}

// testGameClass()



const writerEffect = (ms) => {
  const pre = document.createElement("PRE")
  pre.innerHTML = "You are a warrior of the kingdoms. Your fate will soon be concluded."
  const text = new TextForce.Effects.Writer(pre, ms)
  return text
}

const testWriterEffect = () => {
  const text = writerEffect(20)
  const text2 =  writerEffect(30)
  const text3 =  writerEffect(40)
  const text4 =  writerEffect(50)

  document.body.appendChild(text.element)
  document.body.appendChild(text2.element)
  document.body.appendChild(text3.element)
  document.body.appendChild(text4.element)

  text.start()
  text2.start()
  text3.start()
  text4.start()

  text.on("done", (writerObject) => {
    console.log(writerObject.element.innerHTML)
  })
}

// testWriterEffect()


const testTextClass = () => {
  const playerStats = new TextForce.Game.Text("pre", "playerStats", "Player Stats")
  const playerHealth = new TextForce.Game.Text("pre", "playerHealth", "Health:")
  const playerHealthValues = new TextForce.Game.Text("pre", "playerHealthValues", "80/100")
  const playerManaValues = new TextForce.Game.Text("pre", "playerManaValues", "50/64")
  const playerMana = new TextForce.Game.Text("pre", "playerMana", "  Mana:")
  const playerExp = new TextForce.Game.Text("pre", "playerExp", "   Exp:")

  const playerUIGroup = new TextForce.Game.Group([playerStats, playerHealth, playerMana, playerExp, playerHealthValues, playerManaValues])

  document.body.appendChild(playerStats.element)
  document.body.appendChild(playerHealth.element)
  document.body.appendChild(playerMana.element)
  document.body.appendChild(playerExp.element)
  document.body.appendChild(playerHealthValues.element)
  document.body.appendChild(playerManaValues.element)

  playerStats.setY(20)
  playerHealth.setY(50)
  playerMana.setY(70)
  playerExp.setY(90)

  playerHealthValues.setY(50)
  playerHealthValues.setX(playerHealth.getX() + 80)
  playerHealthValues.setColor("hsla(120, 100%, 30%, 1)")

  playerManaValues.setY(70)
  playerManaValues.setX(playerMana.getX() + 80)
  playerManaValues.setColor("hsla(220, 100%, 50%, 1)")


  playerUIGroup.translateX(100)
  playerUIGroup.translateY(100)
  // playerUIGroup.translateX(0)
  playerUIGroup.scale(1.5)

  playerStats.show()
  playerHealth.show()
  playerMana.show()
  playerExp.show()
  playerHealthValues.show()

  const groupShakerX = new TextForce.Effects.Shake({
    type: "group",
    shakerConfig: {
      group: playerUIGroup,
      duration: 1000,
      frequency: 10,
      strength: 1,
      direction: "x"
    }
  })

  // groupShakerX.start()

  // playerHealth.setText("Health: 100/100")
  // playerMana.setText("  Mana: 60/64")
}

// testTextClass()
//
//


const testCameraShake = () => {
  const text = new TextForce.Game.Text("pre", "text", "Hello world!")
  document.body.appendChild(text.element)
  text.show()
  text.setX(40)
  text.setY(40)

  console.log()

  const xShake = new TextForce.Effects.Shake({
    type: "object",
    shakerConfig: {
      object: text,
      duration: 1000,
      frequency: 50,
      strength: 20,
      direction: "x"
    }
  })
  const yShake = new TextForce.Effects.Shake({
    type: "object",
    shakerConfig: {
      object: text,
      duration: 1000,
      frequency: 50,
      strength: 20,
      direction: "y"
    }
  })

  const runShake = () => {
    xShake.start()
    yShake.start()
  }

  runShake()

}

// testCameraShake()
//
//

const testSound = () => {
  const codSound = new URL("./test_assets/lvl_up_sound.mp3", import.meta.url)
  const levelUpSound = new TextForce.Sound("lvl_up_sound", codSound.href)

  console.log(levelUpSound.getState())

  levelUpSound.setVolume(0.5)
  levelUpSound.play()
  // levelUpSound.loop()

  console.log(levelUpSound.getState())

  // setTimeout(() => {
  //   levelUpSound.pause()
  // }, 2000)
  //
  // setTimeout(() => {
  //   levelUpSound.play()
  // }, 2500)

  //
  // test.addEventListener("loadeddata", () => {
  //   console.log(test.duration)
  //   test.play()
  // })
}

// testSound()
//

const testGameClassSounds = () => {
  const codSound = new URL("./test_assets/lvl_up_sound.mp3", import.meta.url)
  const codSoundObject = new TextForce.Sound("lvl_up_sound", codSound.href)

  const game = new TextForce.Game({
    device: "keyboard",
    preload: (game) => {
      game.soundStorage.append(codSoundObject)

      const lvlUpSound = game.soundStorage.get("lvl_up_sound")

      lvlUpSound.setVolume(0.1)
      lvlUpSound.play()
    }
  })
}

// testGameClassSounds()
//
//


const testPreload = () => {
  const game = new TextForce.Game({
    input: {
      device: "keyboard",
      keys: {
        "w": "UP",
        "a": "LEFT",
        "s": "DOWN",
        "d": "RIGHT",
        "Enter": "CONFIRM",
        "Backspace": "BACK",
      }
    },
    preload(game) {
      console.log(game)
      console.log("preloading ...")
    }
  })
}

// testPreload()

const testScene = () => {
  const scene = new TextForce.Scene({
    name: "test scene",
    create: () => {
      console.log("creating ...")
    },
    render: () => {
      console.log("rendering ...")
    },
    destroy: () => {
      console.log("destroying ...")
    }
  })

  console.log(scene)
}

// testScene()


const testKeyboard = () => {
  const pubsub = new TextForce.PubSub()
  const keyboard = new TextForce.Keyboard({
    keys: {},
    eventEmitter: pubsub
  })

  keyboard.attach()
  keyboard.setKey("w", "up")
  keyboard.setKey("a", "left")
  keyboard.setKey("s", "down")
  keyboard.setKey("d", "right")

  console.log(keyboard.getKeys())

  let pressedKeys = 0
  keyboard.eventEmitter.subscribe("input", (pressedKey) => {
    if (pressedKeys >= 5) {
      keyboard.remove()
      return
    }

    console.log(pressedKey)
    pressedKeys++
  })
}

// testKeyboard()


const testGamepad = () => {
  const pubsub = new TextForce.PubSub()
  const gamepad = new TextForce.Gamepad({
    keys: {},
    mapping: "xbox",
    eventEmitter: pubsub
  })

  gamepad.attach()
  gamepad.setKey("A", "CONFIRM")
  gamepad.setKey("B", "CANCEL")
  gamepad.setKey("CROSS-UP", "UP")
  gamepad.setKey("CROSS-LEFT", "LEFT")
  gamepad.setKey("CROSS-DOWN", "DOWN")
  gamepad.setKey("CROSS-RIGHT", "RIGHT")

  // gamepad.remove()

  gamepad.removeKey("B")

  let counter = 0

  pubsub.subscribe("input", (pressed) => {
    console.log(pressed)

    if (counter >= 200) {
      gamepad.remove()
      return
    }

    counter++
  })

  const pubsub2 = new TextForce.PubSub()
  const game = new TextForce.Game({
    input: {
      device: "keyboard",
      keys: {
        "w": "UP",
        "a": "LEFT",
        "s": "DOWN",
        "d": "RIGHT",
        "Enter": "CONFIRM",
        "Backspace": "BACK",
      },
      eventEmitter: pubsub2
    },
    preload(game) {
      console.log(game)
      console.log("preloading ...")
    }
  })

  pubsub2.subscribe("input", (pressed) => {
    console.log(pressed)
  })
}

// testGamepad()

const testCanvas = () => {
  const gameCanvas = new TextForce.Canvas({
    width: 500,
    height: 500,
    background: "hsla(0, 0%, 5%, 1)"
  })

  const text = new TextForce.Text("test", "hello")
  const text2 = new TextForce.Text("test2", "asdfasdf")
  const text3 = new TextForce.Text("test3", "asdfadsfasdfdsafdsf")

  text.setColor("hsla(0, 0%, 95%, 1)")
  text2.setColor("hsla(0, 0%, 95%, 1)")
  text3.setColor("hsla(0, 0%, 95%, 1)")

  text.setX(100)
  text.setY(100)
  text2.setX(200)
  text2.setY(200)
  text3.setX(300)
  text3.setY(300)

  document.body.appendChild(gameCanvas.element)
  document.body.appendChild(text.element)
  document.body.appendChild(text2.element)
  document.body.appendChild(text3.element)
}


// import menu   from "./menuScene"
// import ingame from "./ingameScene"

const makeTestGame = () => {
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
    scenes: [menu, ingame],
    activeScene: "menu"
  })
}

// makeTestGame()

// testCanvas()
