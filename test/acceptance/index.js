const {equal} = require('assert')
const {GooseGame} = require('../../src/goose-game')

describe('game', function () {
  it('adds player to game', () => {
    const game = new GooseGame()
    const name = 'Pippo'
    const message = game.addPlayer(name)

    equal(`Giocatori: ${name}`, message)
  })
  it('adds subsequent player to game', () => {
    const game = new GooseGame()

    const name1 = 'Pippo'
    const name2 = 'Pluto'

    game.addPlayer(name1)
    const message = game.addPlayer(name2)

    equal(`Giocatori: ${name1}, ${name2}`, message)
  })
})
