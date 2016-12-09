class GooseGamePlayer {
  constructor (name) {
    this.name = name
  }

  toString () {
    return this.name
  }
}

class GooseGame {
  constructor () {
    this.players = []
    this.positions = []
  }
  addPlayer (name, position = 0) {
    if (this.players.map(i => i.name).includes(name)) {
      return `${name}: giocatore già presente`
    }

    this.positions.push(position)

    this.players.push(new GooseGamePlayer(name))
    return `Giocatori: ${this.players.map(i => i.name).join(', ')}`
  }
  movePlayer (name, firstDice, secondDice) {
    let index = this.players.map(i => i.name).indexOf(name)
    let previousPosition = this.positions[index]
    let sum = firstDice + secondDice
    let previousLabel = previousPosition || 'Partenza'
    return `${name} tira ${firstDice}, ${secondDice}. ${name} muove da ${previousLabel} a ${previousPosition + sum}`
  }
}

module.exports = {GooseGame, GooseGamePlayer}
