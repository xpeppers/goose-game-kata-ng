const {equal} = require('assert')
const {GooseGame} = require('../../src/goose-game')

describe('goose game', function () {
  beforeEach(() => {
    this.game = new GooseGame()
  })
  it('adds player to game', () => {
    const message = this.game.addPlayer('Pippo')
    equal(message, `Giocatori: Pippo`)
  })
  it('adds subsequent player to game', () => {
    this.game.addPlayer('Pippo')
    const message = this.game.addPlayer('Pluto')
    equal(message, `Giocatori: Pippo, Pluto`)
  })
  it('does not add an existing player', () => {
    this.game.addPlayer('Pippo')
    const message = this.game.addPlayer('Pippo')
    equal(message, `Pippo: giocatore già presente`)
  })
})
