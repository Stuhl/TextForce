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
  const text2 =  writerEffect(50)
  const text3 =  writerEffect(100)
  const text4 =  writerEffect(200)

  document.body.appendChild(text.element)
  document.body.appendChild(text2.element)
  document.body.appendChild(text3.element)
  document.body.appendChild(text4.element)

  text.start()
  text2.start()
  text3.start()
  text4.start()

  text.on("done", () => {
    console.log("text1 is done.")
  })

  text2.on("done", () => {
    console.log("text2 is done.")
  })
}

testWriterEffect()
