$(function() {
  var allKeyUps = $(document).asEventStream("keyup")

  var spaceBarKeyUps = allKeyUps
    .filter(function(event) { return event.keyCode == 32 })
    
  spaceBarKeyUps.onValue(function(event) { alert("you pressed space") })
})
