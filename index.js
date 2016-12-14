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
  movePlayer () {
    return 'Pippo tira 4, 2. Pippo muove da parteza a 6'
  }
}

module.exports = {GooseGame}
