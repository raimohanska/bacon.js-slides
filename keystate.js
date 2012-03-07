var allKeyUps = $(document).asEventStream("keyup")
var allKeyDowns = $(document).asEventStream("keydown")

function always(value) { return function(_) { return value } }
function keyCodeIs(keyCode) { return function(event) { return event.keyCode == keyCode} }
function keyUps(keyCode) { return allKeyUps.filter(keyCodeIs(keyCode)) }
function keyDowns(keyCode) { return allKeyDowns.filter(keyCodeIs(keyCode)) }
function keyState(keyCode, value) {
  return keyDowns(keyCode).map(always([value])).
    merge(keyUps(keyCode).map(always([]))).toProperty([])
}
// concat :: [a] -> [a] -> [a]
function concat(a1, a2) {
  return a1.concat(a2)
}
