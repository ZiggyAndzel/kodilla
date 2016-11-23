// zadanie 8_5

var a = prompt('podaj pierwszą liczbę');
var b = prompt('podaj drugą liczbę');
var value = (a*a) + (2*a*b) - (b*b);

if (value == 0) {
	console.log('Wynik równa się zero');
} else if (value > 0) {
		console.log('Wynik to ' + value + ' i jest większy od zera');
} else {
	console.log('Wynik to ' + value + ' i jest mniejszy od zera');
}