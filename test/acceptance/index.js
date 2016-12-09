const {ok, equal} = require('assert')
const {GooseGame, GooseGamePlayer} = require('../../src/goose-game')

describe('goose game', function () {
  describe('#constructor', function () {
    it('can take a custom roller', () => {
      const game = new GooseGame()
      equal(game.diceRollerFn().length, 2)
      let [first, second] = game.diceRollerFn()
      ok(first >= 1 && first <= 6)
      ok(second >= 1 && second <= 6)
    })
  })

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
    const message = this.game._movePlayer('Pippo', 4, 2)
    equal(message, `Pippo tira 4, 2. Pippo muove da Partenza a 6`)
  })
  it('moves player from previous position', () => {
    this.game.addPlayer('Pluto', 6)
    const message = this.game._movePlayer('Pluto', 2, 3)
    equal(message, `Pluto tira 2, 3. Pluto muove da 6 a 11`)
  })
  it('moves player and keeps track of player\'s previous position', () => {
    this.game.addPlayer('Pippo', 0)
    this.game._movePlayer('Pippo', 2, 1)
    const message = this.game._movePlayer('Pippo', 2, 1)
    equal(message, `Pippo tira 2, 1. Pippo muove da 3 a 6`)
  })
  it('is won when player reaches position 63', () => {
    this.game.addPlayer('Pippo', 60)
    const message = this.game._movePlayer('Pippo', 2, 1)
    equal(message, `Pippo tira 2, 1. Pippo muove da 60 a 63. Pippo vince!!`)
  })
  it('rebounces player when position goes over 63', () => {
    this.game.addPlayer('Pippo', 60)
    const message = this.game._movePlayer('Pippo', 3, 2)
    equal(message, `Pippo tira 3, 2. Pippo muove da 60 a 63. Pippo rimbalza! Pippo torna a 61`)
  })
  it('moves player rolling dice', () => {
    const game = new GooseGame(() => [4, 2])
    game.addPlayer('Pippo')
    const message = game.movePlayer('Pippo')
    equal(message, `Pippo tira 4, 2. Pippo muove da Partenza a 6`)
  })
})

describe('GooseGamePlayer', function () {
  it('takes a name argument', () => {
    const player = new GooseGamePlayer('foo')
    equal(player.name, 'foo')
  })
})
