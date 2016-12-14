const {equal, ok} = require('assert')
const {GooseGame, GooseGamePlayer} = require('..')

describe('GooseGame', function () {
  describe('.constructor', function () {
    it('takes a function that returns 2 dice values', function () {
      const game = new GooseGame(() => [1, 6])
      game.addPlayer('Pippo')
      const message = game.movePlayer('Pippo')
      equal(message, 'Pippo tira 1, 6. Pippo muove da partenza a 7')
    })
    it('uses a random dice rolling function when none is provided', function () {
      const game = new GooseGame()
      equal(game.diceRoller, GooseGame.rollDice)
    })
  })
  describe('.hasEnded', function () {
    it('returns false when there are no players', function () {
      const game = new GooseGame()
      equal(game.hasEnded(), false)
    })
    it('returns true when a player has won', function () {
      const game = new GooseGame()
      game.addPlayer('Pippo', 63)
      equal(game.hasEnded(), true)
    })
  })
  describe('.addPlayer', function () {
    it('stores GooseGamePlayer object', function () {
      const game = new GooseGame()
      game.addPlayer('Pippo')
      ok(game.players[0] instanceof GooseGamePlayer, 'player is not an instance of GooseGamePlayer')
    })
  })
  describe('#rollDice', function () {
    it('returns an array with two dice values', function () {
      let dice = GooseGame.rollDice()
      equal(dice.length, 2)
      ok(dice[0] > 0 && dice[0] <= 6)
      ok(dice[1] > 0 && dice[1] <= 6)
    })
  })
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
  it('can move a player', function () {
    const game = new GooseGame(() => [4, 2])
    game.addPlayer('Pippo')
    const message = game.movePlayer('Pippo')
    equal(message, 'Pippo tira 4, 2. Pippo muove da partenza a 6')
  })
  it('can move another player', function () {
    const game = new GooseGame(() => [2, 2])
    game.addPlayer('Pluto')
    const message = game.movePlayer('Pluto')
    equal(message, 'Pluto tira 2, 2. Pluto muove da partenza a 4')
  })
  it('can move player from the last position', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    game.diceRoller = () => [4, 2]
    game.movePlayer('Pluto')
    game.diceRoller = () => [2, 3]
    const message = game.movePlayer('Pluto')
    equal(message, 'Pluto tira 2, 3. Pluto muove da 6 a 11')
  })
  it('ends when player reaches 63', function () {
    const game = new GooseGame()
    game.addPlayer('Pippo')
    game.diceRoller = () => [60, 0]
    game.movePlayer('Pippo')
    game.diceRoller = () => [1, 2]
    const message = game.movePlayer('Pippo')
    equal(message, 'Pippo tira 1, 2. Pippo muove da 60 a 63. Pippo vince!!')
  })
  it('bounces a player when he goes beyond 63', function () {
    const game = new GooseGame()
    game.addPlayer('Pluto')
    game.diceRoller = () => [60, 0]
    game.movePlayer('Pluto')
    game.diceRoller = () => [3, 2]
    const message = game.movePlayer('Pluto')
    equal(message, 'Pluto tira 3, 2. Pluto muove da 60 a 63. Pluto rimbalza! Pluto torna a 61')
  })
})

describe('GooseGamePlayer', function () {
  it('can be initialized with name and position', function () {
    const player = new GooseGamePlayer('Pippo', 0)
    equal(player.name, 'Pippo')
    equal(player.position, 0)
  })
})

describe('GooseGameAutoPlayer', function () {
  it('plays the game', function () {
    const game = new GooseGame()
    let message = String()
    game.addPlayer('Pluto')
    game.addPlayer('Pippo')
    while (true) {
      message += game.movePlayer('Pluto')
      if (game.hasEnded()) break
      message += game.movePlayer('Pippo')
      if (game.hasEnded()) break
    }
    ok(message.match(/vince!!$/))
  })
})
