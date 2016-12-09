class GooseGamePlayer {
  constructor (name, position) {
    this.name = name
    this.position = position
    this.previous = undefined
  }
  hasWon () {
    return this.position === 63
  }
  toString () {
    return this.name
  }
  updatePosition (position) {
    this.previous = this.position
    this.position = position
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
    return this._printablePlayers()
  }
  movePlayer (name, firstDie, secondDie) {
    const player = this._getPlayer(name)
    player.updatePosition(player.position + firstDie + secondDie)
    let response = `${player.name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${player.previous || 'Partenza'} a ${player.position}`
    if (player.hasWon()) {
      response = `${response}. ${player.name} vince!!`
    }
    return response
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
  _printablePlayers () {
    return `Giocatori: ${this.players.join(', ')}`
  }
}

module.exports = {GooseGame, GooseGamePlayer}
