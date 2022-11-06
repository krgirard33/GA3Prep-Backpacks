const Item = require('../item.js');
const Compartment = require('../compartment.js');
const Backpack = require('../backpack.js');

describe("The Backpack class", function () {

	// SPEC 9 - What happens when you pass in valid Compartment objects for each of the three properties?
	it("correctly instantiates an object when instances of the Compartment class are passed into the constructor", function () {
		let textbook = new Item("textbook", "main");
		let spiralNotebook = new Item("spiral notebook", "main");
		let pen = new Item("pen", "front");
		let main = new Compartment([textbook, spiralNotebook]);
		let front = new Compartment([pen]);
		let side = new Compartment(); // empty
		let backpack = new Backpack(main, front, side);
		expect(backpack).toBeInstanceOf(Backpack);
		expect(backpack.main.items[0].name).toEqual("textbook");
		expect(backpack.front.items[0].name).toEqual("pen");
		expect(backpack.side.items).toEqual([]);
	});

	// SPEC 10 - What happens if you pass in something that is not a valid Compartment instance?
	it('should throw an error if any of the arguments passed in are not instances of the Compartment class', function () {
		let pen = new Item("pen", "front");
		let invalidCompartment = { yeah: "no good" };
		let front = new Compartment([pen]);
		let side = new Compartment();
		let instantiationAttempt = function () {
			new Backpack(invalidCompartment, front, side);
		};
		expect(instantiationAttempt).toThrowError("All compartments must be valid instances of the Compartment class.");
	});

	// SPEC 11 - What happens when you pass no arguments into the constructor?
	it("can instantiate an object with no arguments and its properties will each be new instances of the Compartment class", function () {
		expect(backpack).toBeInstanceOf(Backpack);
		expect(backpack.main).toBeInstanceOf(Compartment);
		expect(backpack.front).toBeInstanceOf(Compartment);
		expect(backpack.side).toBeInstanceOf(Compartment);
		expect(backpack.main.items).toEqual([]);
		expect(backpack.front.items).toEqual([]);
		expect(backpack.side.items).toEqual([]);
	});

	// Add a nested describe block just for the addItem method
	describe("addItem method", function () {

		// SPEC 12 - Does the addItem method place items in the correct compartment?
		it("adds items to the correct compartments when location is specified", function () {
			let binder = new Item("binder", "main");
			let eraser = new Item("big pink eraser", "front");
			let water = new Item("water bottle", "side");
			let backpack = new Backpack();
			backpack.addItem(binder);
			backpack.addItem(eraser);
			backpack.addItem(water);
			expect(backpack.main.items).toContain(binder);
			expect(backpack.front.items).toContain(eraser);
			expect(backpack.side.items).toContain(water);
		});

		// SPEC 13 - Does the addItem method change an item's location to "main" if it is null and then put it in main?
		it("adds items to the main compartment when location is null", function () {
			let dictionary = new Item("dictionary"); // no location
			let backpack = new Backpack();
			backpack.addItem(dictionary);
			expect(backpack.main.items).toContain(dictionary);
		});

		// SPEC 14 - Does the addItem method prevent adding an item to the side pocket if it already has an item?
		it("does not add an item to the side compartment when another item is already present", function () {
			let water = new Item("water bottle", "side");
			let candyBar = new Item("big Toblerone bar", "side");
			let backpack = new Backpack();
			backpack.addItem(water);
			backpack.addItem(candyBar);
			expect(backpack.side.items).toContain(water);
			expect(backpack.side.items).not.toContain(candyBar);
		});
	});

	// Add a nested describe block just for the fillBackpack method
	describe("fillBackpack method", function () {

		// SPEC 15 - Does the method successfully add all the items passed in?
		it('should add every item to the backpack if given an array of items', function () {
			let backpack = new Backpack();
			let textbook = new Item("textbook", "main");
			let pen = new Item("pen", "front");
			let water = new Item("water bottle", "side");
			let items = [textbook, pen, water];
			backpack.fill(items);
			expect(backpack.main.items).toContain(textbook);
			expect(backpack.front.items).toContain(pen);
			expect(backpack.side.items).toContain(water);
		});

		// SPEC 16 - Does the method return a response object with a confirmation message and the backpack object?
		it('should return a response object containing a confirmation message and the backpack object', function () {
			let backpack = new Backpack();
			let textbook = new Item("textbook", "main");
			let pen = new Item("pen", "front");
			let water = new Item("water bottle", "side");
			let items = [textbook, pen, water];
			let response = backpack.fill(items);
			expect(response.confirmation).toEqual("Items successfully added.");
			expect(response.itemsAdded).toEqual(items);
		});
	});

	// You could go on! Perhaps you could write tests for (and code) methods like findItem, removeItem, etc!

});