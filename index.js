class GooseGamePlayer {
  constructor (name, position) {
    this._name = name
    this._position = position
  }
  get name () {
    return this._name
  }
  get position () {
    return this._position
  }
  set position (value) {
    this._position = value
  }
}

class GooseGame {
  static rollDice () {
    return [Math.round(1 + Math.random() * 5), Math.round(1 + Math.random() * 5)]
  }
  constructor (diceRoller = GooseGame.rollDice) {
    this.players = []
    this.diceRoller = diceRoller
  }
  addPlayer (name, position = 0) {
    if (this.players.some(byName(name))) {
      return `${name}: giocatore già presente`
    }
    this.players.push(new GooseGamePlayer(name, position))
    return `Giocatori: ${this.players.map(player => player.name).join(', ')}`
  }
  hasEnded () {
    return this.players.some(hasWon)
  }
  movePlayer (name) {
    return this._movePlayer(name, ...this.diceRoller())
  }
  _movePlayer (name, firstDie, secondDie) {
    let player = this.players.find(byName(name))
    let message = `${player.name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${player.position || 'partenza'} a `
    player.position += firstDie + secondDie
    if (hasWon(player)) {
      return appendWinMessageTo(message, player)
    }
    if (hasBounced(player)) {
      player.position = 63 - (player.position - 63)
      return appendBounceMessageTo(message, player)
    }
    return `${message}${player.position}`
  }
}

function appendWinMessageTo (message, {name, position}) {
  return `${message}${position}. ${name} vince!!`
}

function appendBounceMessageTo (message, {name, position}) {
  return `${message}63. ${name} rimbalza! ${name} torna a ${position}`
}

function hasWon ({position}) {
  return position === 63
}

function hasBounced ({position}) {
  return position > 63
}

function byName (name) {
  return function (player) {
    return name === player.name
  }
}

module.exports = {GooseGame, GooseGamePlayer}
