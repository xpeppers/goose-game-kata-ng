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
  it('refuse to add a player that already exists and not Pippo', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    const message = game.addPlayer('Pluto')
    equal(message, 'Pluto: giocatore già presente')
  })
  it('moves the player', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    const message = game.movePlayer('Pippo', 4, 2)
    equal(message, 'Pippo tira 4, 2. Pippo muove da parteza a 6')
  })
  it.skip('set startig position when a player is added to the game', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    var message = ''
    equal(message, 'Pluto: giocatore già presente')
  })
})
