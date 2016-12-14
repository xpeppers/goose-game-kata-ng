class GooseGame {
  constructor () {
    this.players = []
  //  this.positions = []
  }
  addPlayer (name) {
    if (~this.players.map(player => player.name).indexOf(name)) {
      return `${name}: giocatore già presente`
    }
    this.players.push({'name': name, 'position': 0})
    return `Giocatori: ${this.players.map(player => player.name).join(', ')}`
  }
  movePlayer (name, firstDie, secondDie) {
    let player = this.players.find(player => player.name === name)
    let positionLabel = player.position || 'partenza'
    player.position += (firstDie + secondDie)
    return `${name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${positionLabel} a ${player.position}`
  }
}

module.exports = {GooseGame}
