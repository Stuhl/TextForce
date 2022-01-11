import Element from "./Element"

class Text extends Element {
  constructor(innerHTML, key) {
    super("pre", key, innerHTML)
  }
}
