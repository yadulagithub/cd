var needle;
needle = 'haystack';
test();  //  output magnet
function test(){
	var needle = 'magnet';     // var is already hoisted
	console.log(needle);
}