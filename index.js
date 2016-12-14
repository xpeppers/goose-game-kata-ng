class GooseGame {
  constructor () {
    this.players = []
  }
  addPlayer (name) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i] === name) {
        return 'Pippo: giocatore già presente'
      }
    }
    this.players.push(name)
    return `Giocatori: ${this.players.join(', ')}`
  }
}

module.exports = {GooseGame}
