var genre;
console.log(genre);  //output undefined 
genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);   // rock
	var genre = "r&b";
	console.log(genre);   // r&b
}
console.log(genre);   // disco