const Item = require('../item.js');
const Compartment = require('../compartment.js');

describe('The Compartment class', function () {

	// SPEC 6 - What happens when an array of valid Item-class objects are passed in?
	it('should correctly instantiate a compartment if an array of Item-class objects is passed in', function () {
		let notebook = new Item("notebook", "main");
		let binder = new Item("binder", "main");
		let main = new Compartment([notebook, binder]);
		expect(main).toBeInstanceOf(Compartment);
		expect(main.items[0]).toBeInstanceOf(Item);
		expect(main.items[1]).toBeInstanceOf(Item);
	});

	// SPEC 7 - What happens when one or more items in the array that is passed in are not valid instances of the Item class?
	it('should throw an error if any of the items passed in are not instances of the Item class', function () {
		let instantiationAttempt = function () {
			new Compartment([{ whatAmI: "regular JS object" }]);
		}
		let errorMessage = "All items must be valid instances of the Item class.";
		expect(instantiationAttempt).toThrowError(errorMessage);
	});

	// SPEC 8 - What happens when no arguments are passed in?
	it('should instantiate a new compartment object with an empty array as the value of the items property', function () {
		let main = new Compartment();
		expect(main).toBeInstanceOf(Compartment);
		expect(main.items).toEqual([]);
	});
});