import Input from "./Input"
import Gamepad from "./low-level/gamepad/Gamepad"
import Keyboard from "./low-level/keyboard/Keyboard"

const inputDevice = new Input(new Gamepad())

inputDevice.attach()
