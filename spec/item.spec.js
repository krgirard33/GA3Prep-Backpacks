// Import code needed for testing
const Item = require('../item.js');

describe("The Item class", function () {

	// SPEC 1 - What happens when a name is passed in?
	it("correctly instantiates object when name is passed in as an argument", function () {
		// Step 1: Set up a test item of the Item class
		let textbook = new Item("textbook");
		// Step 2: Write expectation to verify item is an instance of the Item class
		expect(textbook).toBeInstanceOf(Item);
		// Step 3: Write expectation to compare name property of actual object with expected value
		expect(textbook.name).toEqual("textbook");
	});

	// SPEC 2 - What happens if a name is not passed in?
	it("throws error if name is not passed into constructor as argument", function () {
		let instantiationAttempt = function () {
			new Item();
		};
		let errorMessage = "Name of item is required";
		expect(instantiationAttempt).toThrowError(errorMessage);
	});

	// SPEC 3 - What happens when a valid location is passed in?
	it("correctly instantiates object from class when valid location is passed in as an argument", function () {
		let pen = new Item("pen", "front");
		expect(pen.location).toEqual("front");
	});

	// NOTE: SPECS 4 & 5 were originally in reverse order

	// SPEC 4 - What happens when the location argument is omitted altogether?
	it("correctly instantiates object from class with a null location when 2nd argument is omitted", function () {
		let eraser = new Item("eraser");
		expect(eraser).toBeInstanceOf(Item);
		expect(eraser.location).toBeNull();
	});

	// SPEC 5 - What happens if location is not valid?
	it("throws error if invalid location is passed into constructor as argument", function () {
		let instantiationAttempt = function () {
			new Item("pen", "New York");
		};
		let errorMessage = "Valid location is required";
		expect(instantiationAttempt).toThrowError(errorMessage);
	});
});