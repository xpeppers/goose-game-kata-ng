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

  it('adds player to game', () => {
    const game = new GooseGame()
    equal(game.addPlayer('Pippo'), `Giocatori: Pippo`)
  })
  it('adds subsequent player to game', () => {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    equal(game.addPlayer('Pluto'), `Giocatori: Pippo, Pluto`)
  })
  it('does not add an existing player', () => {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    equal(game.addPlayer('Pippo'), `Pippo: giocatore già presente`)
  })
  it('moves player from initial position', () => {
    const game = new GooseGame(() => [4, 2])
    game.addPlayer('Pippo')
    const message = game.movePlayer('Pippo')
    equal(message, `Pippo tira 4, 2. Pippo muove da Partenza a 6`)
  })
  it('moves player from previous position', () => {
    const game = new GooseGame(() => [2, 3])
    game.addPlayer('Pluto', 6)
    const message = game.movePlayer('Pluto', 2, 3)
    equal(message, `Pluto tira 2, 3. Pluto muove da 6 a 11`)
  })
  it('moves player and keeps track of player\'s previous position', () => {
    const game = new GooseGame(() => [2, 1])
    game.addPlayer('Pippo')
    game.movePlayer('Pippo')
    const message = game.movePlayer('Pippo')
    equal(message, `Pippo tira 2, 1. Pippo muove da 3 a 6`)
  })
  it('is won when player reaches position 63', () => {
    const game = new GooseGame(() => [2, 1])
    game.addPlayer('Pippo', 60)
    const message = game.movePlayer('Pippo')
    equal(message, `Pippo tira 2, 1. Pippo muove da 60 a 63. Pippo vince!!`)
  })
  it('rebounces player when position goes over 63', () => {
    const game = new GooseGame(() => [3, 2])
    game.addPlayer('Pippo', 60)
    const message = game.movePlayer('Pippo')
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
