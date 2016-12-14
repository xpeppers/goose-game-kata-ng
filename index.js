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
    let position = this.positions[index] === 0 ? 'partenza' : this.positions[index]
    this.positions[index] += (firstDie + secondDie)
    return `${name} tira ${firstDie}, ${secondDie}. ${name} muove da ${position} a ${this.positions[index]}`
  }
}

module.exports = {GooseGame}
