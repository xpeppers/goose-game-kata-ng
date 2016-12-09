const {equal} = require('assert')
const {GooseGame, GooseGamePlayer} = require('../../src/goose-game')

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
  it('moves player from initial position', () => {
    this.game.addPlayer('Pippo')
    const message = this.game.movePlayer('Pippo', 4, 2)
    equal(message, `Pippo tira 4, 2. Pippo muove da Partenza a 6`)
  })
  it('moves player from previous position', () => {
    this.game.addPlayer('Pluto', 6)
    const message = this.game.movePlayer('Pluto', 2, 3)
    equal(message, `Pluto tira 2, 3. Pluto muove da 6 a 11`)
  })
})

describe('GooseGamePlayer', function () {
  it('takes a name argument', () => {
    const player = new GooseGamePlayer('foo')
    equal(player.name, 'foo')
  })
})
