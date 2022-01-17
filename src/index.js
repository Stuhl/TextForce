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

const testPubSub = () => {
  const pubSub = new TextForce.PubSub()


  const logger = () => {}

  pubSub.publish("input")
  pubSub.subscribe(2, logger)
  pubSub.unsubscribe("input", logger)
  console.log(pubSub)
}


const testGameClass = () => {
  const game = new TextForce.Game({
    input: {
      device: "gamepad",
      keys: {
        "A": "CONFIRM",
        "RT": "FIRE",
        "RB": "RELOAD"
      },
      mapping: "xbox"
    }
  })
  console.log(game)
}

// testGameClass()



const writerEffect = (ms) => {
  const pre = document.createElement("PRE")
  pre.innerHTML = "You are a warrior of the kingdoms. Your fate will soon be concluded."
  const text = new TextForce.Effects.Writer(pre, ms)
  return text
}

const testWriterEffect = async () => {
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
//


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

  playerStats.show()
  playerHealth.show()
  playerMana.show()
  playerExp.show()
  playerHealthValues.show()

  // playerExp.hide()

  playerStats.setY(20)
  playerHealth.setY(50)
  playerMana.setY(70)
  playerExp.setY(90)

  playerHealthValues.setY(50)
  playerHealthValues.setX(playerHealth.getX() + 80)
  playerHealthValues.setColor("hsla(120, 100%, 30%, 1)")

  playerManaValues.setY(70)
  playerManaValues.setX(playerMana.getX() + 78)
  playerManaValues.setColor("hsla(220, 100%, 50%, 1)")


  playerUIGroup.translateX(100)
  playerUIGroup.translateY(100)
  playerUIGroup.scale(1.5)

  // playerHealth.setText("Health: 100/100")
  // playerMana.setText("  Mana: 60/64")
}

// testTextClass()
