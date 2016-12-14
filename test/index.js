const {equal} = require('assert')
const {GooseGame} = require('..')

describe('GooseGame', function () {
  it('adds player to the game', function () {
    const game = new GooseGame()
    const message = game.addPlayer('Pippo')
    equal(message, 'Giocatori: Pippo')
  })
})
