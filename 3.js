$(function() {
  function nonEmpty(xs) { return xs.length > 0 }
  function head(xs) { return xs[0] }

  // direction :: Observable [String] 
  var direction = keyState(38, 'UP')
    .combine(keyState(40, 'DOWN'), concat)
    .combine(keyState(37, 'LEFT'), concat)
    .combine(keyState(39, 'RIGHT'), concat)
    
  // movements :: Observable String
  var movements = direction.sample(200).filter(nonEmpty).map(head)

  // movementsSoFar :: Observable [String]
  var movementsSoFar = movements
    .scan([], function(acc, move) { return acc.concat([move]) })

  movementsSoFar.onValue(function(moves) {$('#movements').text(moves.join(' ')) });
})
