// TECH
// import Game from "./tech/game/Game"
import PubSub from "./tech/pubsub/PubSub"
import Scene from "./tech/Scene"
import GameMath from "./tech/math/Math"

class TextForce {
  static Math = GameMath
  static PubSub = PubSub
  static Scene = Scene
  static Game = Game
}

export default TextForce
