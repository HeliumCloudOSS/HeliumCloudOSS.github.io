var element = document.querySelector('.container');
var hammertime = new Hammer(element);
hammertime.on('pan', function(ev) {
	console.log(ev);
});

hammer.on('tap', function(event) {
    console.log('Tap event detected');
  });
  
  // Add event listener for swipe event
  hammer.on('swipe', function(event) {
    console.log('Swipe event detected');
  });
  
  // Add event listener for pinch event
  hammer.on('pinch', function(event) {
    console.log('Pinch event detected');
  });

$("button").click(function() {
    $("div").animate({ 

    })
})