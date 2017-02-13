//famous中的轮播图
var itemul = document.getElementById("itemlistul");
var dx = 90;
var currentIndex = 0;

function move() {
	currentIndex++;
	if(currentIndex == 4) {
		itemlistul.style.left = "0px";
		currentIndex = 0;
	}
	var target = currentIndex * -1170;
	var timer = null;
	timer = setInterval(function() {
		var oldleft = itemul.offsetLeft;
		if(oldleft <= target) {
			clearInterval(timer);
			setTimeout(function() {
				move();
			}, 5000);
		} else {
			var newleft = oldleft - dx;
			itemul.style.left = newleft + "px";
		}
	}, 30);

}
move();