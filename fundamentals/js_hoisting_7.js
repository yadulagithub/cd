dojo = "san jose";
console.log(dojo);   // san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);       // seattle
	var dojo = "burbank";
	console.log(dojo);       // burbank
}
console.log(dojo);       // san jose