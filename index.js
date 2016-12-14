class GooseGame {
  constructor () {
    this.names = []
  }
  addPlayer (name) {
    this.names.push(name)
    return `Giocatori: ${this.names.join(', ')}`
  }
}

module.exports = {GooseGame}
