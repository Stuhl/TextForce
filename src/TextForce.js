// TECH
import Game from "./tech/game/Game"
import PubSub from "./tech/pubsub/PubSub"
import Scene from "./tech/scene/Scene"
import GameMath from "./tech/math/Math"
import Sound from "./tech/sound/Sound"
import Keyboard from "./tech/input/low-level/keyboard/Keyboard"
import Gamepad from "./tech/input/low-level/gamepad/Gamepad"



// EFFECTS
import Writer from "./tech/effects/writer/Writer.js"
import Shake from "./tech/effects/shake/high-level/Shake.js"

class TextForce {
  static Math = GameMath
  static PubSub = PubSub
  static Keyboard = Keyboard
  static Gamepad = Gamepad
  // static Scene = Scene
  static Game = Game
  static Sound = Sound
  static Scene = Scene
  static Effects = {
    Writer,
    Shake
  }
}

export default TextForce
