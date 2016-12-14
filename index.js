class GooseGame {
  constructor () {
    this.players = []
  }
  addPlayer (name) {
    if (~this.players.indexOf(name)) {
      return 'Pippo: giocatore già presente'
    }
    this.players.push(name)
    return `Giocatori: ${this.players.join(', ')}`
  }
}

module.exports = {GooseGame}
