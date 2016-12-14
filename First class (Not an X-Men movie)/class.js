function Telephone(brand, price, color, display) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.display = display;
};

Telephone.prototype.printInfo = function() {
	console.log("Marka telefonu to: " + this.brand + ", cena to: " + this.price + ", wyświetlacz ma " + this.display + " cali, a kolor to " + this.color);
};

var GalaxyS6 = new Telephone("Samsung", 1400, "srebrny", 5.5);
var iPhone6 = new Telephone("Apple", 2400, "biały", 4.7);
var One = new Telephone("OnePlus", 900, "czarny", 5);

GalaxyS6.printInfo();
iPhone6.printInfo();
One.printInfo();