// CONTENT
import Item from "./content/Item"
import Player from "./content/Player"
import Enemy from "./content/Enemy"

// TECH
import Game from "./tech/Game"
import PubSub from "./tech/PubSub"
import Scene from "./tech/Scene"

// UTILITY
import GameMath from "./utility/Math"
import Component from "./utility/Component"
import BattleCalculator from "./utility/BattleCalculator"

class TextForce {
  constructor() {
    this.isRunning = false
    this.Game = Game
    this.Math = GameMath
    this.Component = Component
  }

  setGame(game) {
    this.game = game
  }

  _setStyle() {
    document.body.style.padding = 0
    document.body.style.margin = 0
  }

  newGame(gameOptions) {
    const game = new this.Game(gameOptions)
    this.setGame(game)
    return game
  }
}

export default TextForce
