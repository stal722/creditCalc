var sum = document.querySelector(".sum");
var time = document.querySelector(".time");
var button = document.querySelector(".button");
var graph = document.querySelector(".graph");

button.addEventListener ("click", function () {
	var count = sum.value/time.value;
	var result = sum.value;
	for (i=0; i<time.value; i++) {		
		result = result - count;
		console.log(result);
	var col = document.createElement("div");
	col.classList.add("col");
	col.innerHTML = result;
	col.style.height = result/sum.value*100+"%";
	col.style.left = i*110 + "px";
	graph.appendChild(col);

	}
	
})