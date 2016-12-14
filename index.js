class GooseGame {
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
    let position = player.position
    player.position += firstDie + secondDie
    if (hasWon(player)) {
      return `${name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${position || 'partenza'} a ${player.position}. ${player.name} vince!!`
    }
    return `${name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${position || 'partenza'} a ${player.position}`
  }
}

function hasWon (player) {
  return player.position === 63
}

function byName (name) {
  return function (player) {
    return name === player.name
  }
}

module.exports = {GooseGame}
