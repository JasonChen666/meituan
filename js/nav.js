var nav_all = document.getElementById("nav_all");
var lis = nav_all.getElementsByTagName("li");
var divs = nav_all.getElementsByTagName("div");
var arrs = nav_all.getElementsByTagName("i");
for(var i=0; i<lis.length; i++) 
{
	 lis[i].index = i;
	 lis[i].onmouseover = function()
	 {  
	 	/*未获得鼠标焦点时nav_item2不出现*/
	 	for(var i=0; i<divs.length; i++)
	 	{
	 		divs[i].style.display = "none";
	 	}
	 	
	 	/*获得鼠标焦点时nav_item2出现*/
	 	
	 	divs[this.index].style.display = "block";
	 	
	 	/*第4和第9个li本身不需要显示*/
	 	
	 	for(var a=0; a<divs.length; a++)
	 	{
	 		divs[3].style.display = "none";
	 	}
	 	
	 	for(var a=0; a<divs.length; a++)
	 	{
	 		divs[8].style.display = "none";
	 	}
	 	
	 	/*获得鼠标焦点时向右的箭头消失*/
	 	
	 	for(var c=0; c<arrs.length; c++)
	 	{
	 		arrs[c].style.display = "block";
	 	}
	 	
	 	/*获得鼠标焦点时nav_item2出现*/
	 	
	 	arrs[this.index].style.visibility = "hidden";
	 	
	 	/*第4和第9个li本身没箭头*/
	 	
	 	for(var d=0; d<arrs.length; d++)
	 	{
	 		arrs[3].style.visibility = "hidden";
	 	}
	 	
	 	for(var e=0; e<divs.length; e++)
	 	{
	 		arrs[8].style.visibility = "hidden";
	 	}
     }
	 
	 lis[i].onmouseout = function()
	 {  
	 	/*未获得鼠标焦点时nav_item2不出现*/
	 	for(var i=0; i<divs.length; i++)
	 	{
	 		divs[i].style.display = "none";
	 	}
	 	
	 	for(var c=0; c<arrs.length; c++)
	 	{
	 		arrs[c].style.visibility = "visible";
	 	}
	 }	
}