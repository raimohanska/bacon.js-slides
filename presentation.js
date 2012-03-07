var slides = ['index.html', '0.html', '1.html', '2.html', '3.html', '4.html'
  , '5.html', '6.html', 'presentation.html']

function initPresentation(id) { 
  showSrc(id + ".js") 
  keyUps(188).map(function() { return Math.max(currentSlide() - 1, 0)} )
    .merge(keyUps(190).map(function () { return Math.min(currentSlide() + 1, slides.length - 1)} ))
    .onValue(showSlide)
  keyUps(48).onValue(function() { showSlide(0) })
  keyUps(32)
    .mapToArray($('.anim').hide())
    .onValue(function(e) { e.show(100) })

}

function showSrc(file) {
  $('#src pre').load(file, function() { prettyPrint()}) 
}
function showSlide(idx) { document.location=slides[idx] } 
function currentSlide() {
  for (i = 0; i < slides.length; i = i+1) {
    if (window.location.toString().lastIndexOf(slides[i]) != -1) return i
  }
  return 0
}

Bacon.EventStream.prototype.mapToArray = function(xs) {
  return this.take(xs.length).map(function() {
    head = xs[0]
    xs = xs.slice(1)
    return head
  })
}
