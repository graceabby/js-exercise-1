var text = 'The sum is ';
function addIt (numA, numB) {
	var total = numA + numB;		
	console.log(text + total);
}
function multiply(numA, numB) {
	var total = numA * numB;
	return total;
	// console.log('this is never going to happen')
}
console.log(multiply(20, 20));
// addIt (8,8);
// addIt (5000, 76);
// console.log(text);
var kurt = {
	arms: 2,
	hasDog: true,
	hairColor: 'brown',
	slogan: function(what) {
		console.log(what + ' is awesome');
	}
}
kurt.slogan('JavaScript')
kurt.hairColor = 'grey';
console.log(kurt.hairColor);