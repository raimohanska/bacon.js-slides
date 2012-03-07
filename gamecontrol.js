function head(array) { return array[0] }
function id(x) { return x }

function GameController(startPos) {
  var direction = keyState(38, new Vector2D(0, -1))
    .combine(keyState(40, new Vector2D(0, 1)), concat)
    .combine(keyState(37, new Vector2D(-1, 0)), concat)
    .combine(keyState(39, new Vector2D(1, 0)), concat)
    .map(head)

  var movements = direction.sample(50).filter(id)

  var position = movements
    .scan(startPos, function(pos, move) { return pos.add(move.times(4)) })

  return { direction : direction, position : position, fire : keyDowns(32) }
}
