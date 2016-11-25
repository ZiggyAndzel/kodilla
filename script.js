// Funkcja pole trójkąta

var getTriangleValue1 = getTriangleValue(5,5);
var getTriangleValue2 = getTriangleValue(7,5);
var getTriangleValue3 = getTriangleValue(5,-5);


function getTriangleValue(a, h) {

	if (a <= 0 || h <= 0) {
		return 'Fatal error. Autodestruction sequence initiated.';
	} else {
		return a*h/2;
	}
};

console.log(getTriangleValue1, getTriangleValue2, getTriangleValue3);
