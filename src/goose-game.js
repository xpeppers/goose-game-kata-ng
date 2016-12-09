class GooseGamePlayer {
  constructor (name, position) {
    this.name = name
    this.position = position
  }
  toString () {
    return this.name
  }
}

class GooseGame {
  constructor () {
    this.players = []
  }
  addPlayer (name, position = 0) {
    if (this._hasPlayer(name)) {
      return `${name}: giocatore già presente`
    }
    this._addPlayer(name, position)
    return this._printPlayers()
  }
  movePlayer (name, firstDice, secondDice) {
    const player = this._getPlayer(name)
    const step = firstDice + secondDice
    let nextPosition = player.position + step
    return `${player.name} tira ${firstDice}, ${secondDice}. ${name} muove da ${GooseGame.printablePositionFor(player)} a ${nextPosition}`
  }
  _getPlayer (name) {
    return this.players.find(player => name === player.name)
  }
  _addPlayer (name, position) {
    let player = new GooseGamePlayer(name, position)
    this.players.push(player)
  }
  _hasPlayer (name) {
    return this.players.some(player => name === player.name)
  }
  _printPlayers () {
    return `Giocatori: ${this.players.join(', ')}`
  }
  static printablePositionFor (player) {
    return player.position || 'Partenza'
  }
}

module.exports = {GooseGame, GooseGamePlayer}
