var rushtimer = document.getElementById("rushtimer");
var spans = rushtimer.getElementsByTagName("span");
var totaltime = 12*60*60;

setInterval(function(){
	totaltime--;
	var hour = Math.floor(totaltime/(60*60));
	var minutes = Math.floor((totaltime - hour*60*60)/60);
	var seconds = totaltime%60;
	spans[0].innerHTML = Math.floor(hour/10);
	spans[1].innerHTML = hour%10;
	spans[2].innerHTML = Math.floor(minutes/10);
	spans[3].innerHTML = minutes%10;
	spans[4].innerHTML = Math.floor(seconds/10);
	spans[5].innerHTML = seconds%10;
},1000);
