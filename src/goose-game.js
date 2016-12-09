class GooseGame {
  constructor () {
    this.players = []
    this.positions = []
  }
  addPlayer (name, position = 0) {
    if (this.players.includes(name)) {
      return `${name}: giocatore già presente`
    }
    this.players.push(name)
    this.positions.push(position)
    return `Giocatori: ${this.players.join(', ')}`
  }
  movePlayer (name, firstDice, secondDice) {
    let index = this.players.indexOf(name)
    let previousPosition = this.positions[index]
    let sum = firstDice + secondDice
    let previousLabel = previousPosition || 'Partenza'
    return `${name} tira ${firstDice}, ${secondDice}. ${name} muove da ${previousLabel} a ${previousPosition + sum}`
  }
}

module.exports = {GooseGame}
