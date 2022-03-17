// TECH
import Game      from "./game/Game"
import PubSub    from "./pubsub/PubSub"
import Scene     from "./scene/Scene"
import GameMath  from "./math/Math"
import Sound     from "./sound/Sound"
import Keyboard  from "./input/low-level/keyboard/Keyboard"
import Gamepad   from "./input/low-level/gamepad/Gamepad"
import Storage   from "./storage/Storage"
import Animation from "./animation/Animation"
import Group     from "./group/Group"
import Timing    from "./animation/TimingFunction"
import Canvas    from "./canvas/Canvas"
import Text      from "./text/Text"


// EFFECTS
import Writer   from "./effects/writer/Writer.js"
import Shake    from "./effects/shake/high-level/Shake.js"

class TextForce {

  /**
   * @type {Canvas}
   */
  static Canvas    = Canvas
  static Text      = Text
  static Math      = GameMath
  static PubSub    = PubSub
  static Keyboard  = Keyboard
  static Gamepad   = Gamepad
  static Scene     = Scene
  static Game      = Game
  static Sound     = Sound
  static Scene     = Scene
  static Storage   = Storage
  static Animation = Animation
  static Timing    = Timing
  static Group     = Group
  static Effects   = {
    Writer,
    Shake
  }
}

export default TextForce
