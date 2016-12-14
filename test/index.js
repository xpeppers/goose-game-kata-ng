const {equal} = require('assert')
const {GooseGame} = require('..')

describe('GooseGame', function () {
  it('adds player to the game', function () {
    const game = new GooseGame()
    const message = game.addPlayer('Pippo')
    equal(message, 'Giocatori: Pippo')
  })
  it('adds more player to the game', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    const message = game.addPlayer('Pluto')
    equal(message, 'Giocatori: Pippo, Pluto')
  })
  it('refuse to add a player that already exists', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    game.addPlayer('Pluto')
    const message = game.addPlayer('Pippo')
    equal(message, 'Pippo: giocatore già presente')
  })
})
