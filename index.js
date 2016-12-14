class GooseGame {
  constructor () {
    this.players = []
    this.positions = []
  }
  addPlayer (name) {
    if (~this.players.indexOf(name)) {
      return `${name}: giocatore già presente`
    }
    this.players.push(name)
    this.positions.push(0)
    return `Giocatori: ${this.players.join(', ')}`
  }
  movePlayer (name, firstDie, secondDie) {
    let index = this.players.indexOf(name)
    let positionLabel = this.positions[index] || 'partenza'
    this.positions[index] += (firstDie + secondDie)
    return `${name} tira ${firstDie}, ${secondDie}. ${name} muove da ${positionLabel} a ${this.positions[index]}`
  }
}

module.exports = {GooseGame}
