class GooseGame {
  constructor () {
    this.players = []
  }
  addPlayer (name) {
    if (~this.players.indexOf(name)) {
      return `${name}: giocatore già presente`
    }
    this.players.push(name)
    return `Giocatori: ${this.players.join(', ')}`
  }
  movePlayer (name, firstDie, secondDie) {
    return `${name} tira ${firstDie}, ${secondDie}. ${name} muove da parteza a ${firstDie + secondDie}`
  }
}

module.exports = {GooseGame}
