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
    if (this.players.map(i => i.name).includes(name)) {
      return `${name}: giocatore già presente`
    }
    this.players.push(new GooseGamePlayer(name, position))
    return `Giocatori: ${this.players.map(i => i.name).join(', ')}`
  }
  movePlayer (name, firstDice, secondDice) {
    const player = this.players.find(player => name === player.name)
    const sum = firstDice + secondDice
    return `${player.name} tira ${firstDice}, ${secondDice}. ${name} muove da ${player.position || 'Partenza'} a ${player.position + sum}`
  }
}

module.exports = {GooseGame, GooseGamePlayer}
