const testPubSub = () => {
  const pubSub = new TextForce.PubSub()


  const playSound = (player) => {
    console.log("playing sound ...")
  }
  const playVfx   = (player) => {
    console.log("playing vfx ...")
  }
  const randomFunction = () => {

  }

  pubSub.subscribe("player hurt", playSound)
  pubSub.subscribe("player hurt", playVfx)
  // pubSub.unsubscribe("player hurt", randomFunction)
  // pubSub.unsubscribe("player hurt")
  //

  pubSub.publish("player hurt", 5)
}

// testPubSub()


const testMathModule = () => {
  const Gamemath = TextForce.Math

  // const randomInt = Gamemath.randomInt(-100, 0)
  // const randomChoice = Gamemath.randomChoice(["ATTACK", "DEFEND", "HEAL"])
  // const scatter = Gamemath.scatter(-10, 2)
  // const forwardScatter = Gamemath.forwardScatter(10, 1)
  // const percentBool = Gamemath.percentBool(0.5)

  // console.log(percentBool)
}
