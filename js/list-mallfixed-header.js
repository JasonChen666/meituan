//               全部价格区间的js
var prange = document.getElementById("pricerange");
var price_i = document.getElementById("price_range_i");
prange.onmouseover = function() {
	prange.className = "allprice_range on"
}

prange.onmouseout = function() {
	prange.className = "allprice_range"
}

