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
    const playerName = 'Pluto'
    game.addPlayer(playerName)
    const message = game.addPlayer(playerName)
    equal(message, `${playerName}: giocatore già presente`)
  })
  it('moves a player', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    const message = game.movePlayer('Pippo', 4, 2)
    equal(message, 'Pippo tira 4, 2. Pippo muove da partenza a 6')
  })
  it('moves another player', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    const message = game.movePlayer('Pluto', 2, 2)
    equal(message, 'Pluto tira 2, 2. Pluto muove da partenza a 4')
  })
  it('moves player from the last position', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    game.movePlayer('Pluto', 4, 2)
    const message = game.movePlayer('Pluto', 2, 3)
    equal(message, 'Pluto tira 2, 3. Pluto muove da 6 a 11')
  })
  it('player wins on 63', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    game.movePlayer('Pippo', 60, 0)
    const message = game.movePlayer('Pippo', 1, 2)
    equal(message, 'Pippo tira 1, 2. Pippo muove da 60 a 63. Pippo vince!!')
  })
  it('player goes beyond 63', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    game.movePlayer('Pippo', 60, 0)
    const message = game.movePlayer('Pippo', 3, 2)
    equal(message, 'Pippo tira 3, 2. Pippo muove da 60 a 63. Pippo rimbalza! Pippo torna a 61')
  })
})
