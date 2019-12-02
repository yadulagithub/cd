var food ;
food = 'chicken';

console.log(food);   // output  will be chicken
eat();   // output will be half-chicken
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
