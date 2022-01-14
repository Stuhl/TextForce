// TECH
// import Game from "./tech/game/Game"
import PubSub from "./tech/pubsub/PubSub"
import Scene from "./tech/Scene"
import GameMath from "./tech/math/Math"

class TextForce {
  static Math = GameMath

  // Game() {
  //   return Game
  // }

  PubSub() {
    return PubSub()
  }

  Scene() {
    return Scene()
  }
}

export default TextForce
