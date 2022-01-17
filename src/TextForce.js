// TECH
import Game from "./tech/game/Game"
import PubSub from "./tech/pubsub/PubSub"
// import Scene from "./tech/Scene"
import GameMath from "./tech/math/Math"



// EFFECTS
import Writer from "./tech/effects/Writer.js"

class TextForce {
  static Math = GameMath
  static PubSub = PubSub
  // static Scene = Scene
  static Game = Game
  static Effects = {
    Writer
  }
}

export default TextForce
