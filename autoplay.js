const {GooseGame} = require('./src/goose-game')

const game = new GooseGame()

game.addPlayer('Ivo')
game.addPlayer('Pietro')

while (true) {
  let message
  message = game.movePlayer('Ivo')
  console.log(message)
  if (/vince!!$/.test(message)) break
  message = game.movePlayer('Pietro')
  console.log(message)
  if (/vince!!$/.test(message)) break
}
