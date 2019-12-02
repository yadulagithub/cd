var mean;
mean();   // output undefined 
console.log(food);     
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);