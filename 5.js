$(function() {
  var startPos = new Vector2D(50, 50)
  var controller = GameController(startPos)
  var raphael = Raphael(document.getElementById('arena'), 200, 200);
  var player = raphael.image("images/man-left-1.png", startPos.x, startPos.y, 40, 40)
  controller.position.onValue(function (pos) { player.attr({x : pos.x, y : pos.y}) })
})
