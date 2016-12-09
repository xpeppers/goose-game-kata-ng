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
    return this._printablePlayers()
  }
  movePlayer (name, firstDie, secondDie) {
    const player = this._getPlayer(name)
    const step = firstDie + secondDie
    let nextPosition = player.position + step
    let response = `${player.name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${GooseGame.printablePositionFor(player)} a ${nextPosition}`
    if (nextPosition === 63) {
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
  static printablePositionFor (player) {
    return player.position || 'Partenza'
  }
}

module.exports = {GooseGame, GooseGamePlayer}
