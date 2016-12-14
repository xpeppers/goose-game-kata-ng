class GooseGame {
  static get WIN_STEP () { return 63 }
  constructor () {
    this.players = []
  }
  addPlayer (name) {
    if (this.players.some(byName(name))) {
      return `${name}: giocatore già presente`
    }
    this.players.push({'name': name, 'position': 0})
    return `Giocatori: ${this.players.map(player => player.name).join(', ')}`
  }
  movePlayer (name, firstDie, secondDie) {
    let player = this.players.find(byName(name))
    let positionLabel = player.position || 'partenza'
    player.position += (firstDie + secondDie)
    let winMessage = player.position === GooseGame.WIN_STEP ? `. ${player.name} vince!!` : ''
    return `${name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${positionLabel} a ${player.position}` + winMessage
  }
}

function byName (name) {
  return function (player) {
    return name === player.name
  }
}

module.exports = {GooseGame}
