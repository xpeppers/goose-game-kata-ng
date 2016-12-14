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
    let message = `${player.name} tira ${firstDie}, ${secondDie}. ${player.name} muove da ${player.position || 'partenza'} a `
    player.position += firstDie + secondDie
    if (hasWon(player)) {
      return message + `${player.position}. ${player.name} vince!!`
    } else if (player.position > 63) {
      player.position = 63 - (player.position - 63)
      return message + `63. ${player.name} rimbalza! ${player.name} torna a ${player.position}`
    }
    return message + `${player.position}`
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
