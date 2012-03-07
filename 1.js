$(function() {
  // allKeyUps :: Observable KeyEvent
  var allKeyUps = $(document).asEventStream("keyup")
  var allKeyDowns = $(document).asEventStream("keydown")
  
  // always :: a -> (b -> a)
  function always(value) { return function(_) { return value } }
  // keyCodeIs :: Int -> (KeyEvent -> Bool)
  function keyCodeIs(keyCode) { return function(event) { return event.keyCode == keyCode} }
  // keyUps :: Int -> Observable KeyEvent
  function keyUps(keyCode) { return allKeyUps.filter(keyCodeIs(keyCode)) }
  function keyDowns(keyCode) { return allKeyDowns.filter(keyCodeIs(keyCode)) }
  
  // keyState :: Int -> Observable Bool
  function keyState(keyCode) {
    return keyDowns(keyCode).map(always(true))
      .merge(keyUps(keyCode).map(always(false)))
      .toProperty(false)
  }
  
  keyState(32).onValue(function(spaceDown) { $('#keyState').text(spaceDown) })  
})
