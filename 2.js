$(function() {
  // keyState :: Int -> a -> Observable [a]
  function keyState(keyCode, value) {
    return keyDowns(keyCode).map(always([value])).
      merge(keyUps(keyCode).map(always([]))).toProperty([])
  }

  // concat :: [a] -> [a] -> [a]
  function concat(a1, a2) {
    return a1.concat(a2)
  }
 
  // arrowKeyState :: Observable [String] 
  var arrowKeyState = keyState(38, 'UP')
    .combine(keyState(40, 'DOWN'), concat)
    .combine(keyState(37, 'LEFT'), concat)
    .combine(keyState(39, 'RIGHT'), concat)
  
  arrowKeyState.onValue(function(keysDown) { $('#keyState').text(keysDown.join(',')) })  
})
