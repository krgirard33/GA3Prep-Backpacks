const Item = require('../item.js');
const Compartment = require('../compartment.js');
const Backpack = require('../backpack.js');

describe("The Backpack class", function() {

	// SPEC 9 - What happens when you pass in valid Compartment objects for each of the three properties?
	it("correctly instantiates an object when instances of the Compartment class are passed into the constructor", function() {

	});

	// SPEC 10 - What happens if you pass in something that is not a valid Compartment instance?
	it('should throw an error if any of the arguments passed in are not instances of the Compartment class', function() {

	});
	
	// SPEC 11 - What happens when you pass no arguments into the constructor?
	it("can instantiate an object with no arguments and its properties will each be new instances of the Compartment class", function() {

	});

	// Add a nested describe block just for the addItem method
	describe("addItem method", function() {
		
		// SPEC 12 - Does the addItem method place items in the correct compartment?
		it("adds items to the correct compartments when location is specified", function() {

		});

		// SPEC 13 - Does the addItem method change an item's location to "main" if it is null and then put it in main?
		it("adds items to the main compartment when location is null", function() {

		});
	
		// SPEC 14 - Does the addItem method prevent adding an item to the side pocket if it already has an item?
		it("does not add an item to the side compartment when another item is already present", function() {

		});
	});

	// Add a nested describe block just for the fillBackpack method
	describe("fillBackpack method", function() {	

		// SPEC 15 - Does the method successfully add all the items passed in?
		it('should add every item to the backpack if given an array of items', function() {

		});

	  // SPEC 16 - Does the method return a response object with a confirmation message and the backpack object?
		it('should return a response object containing a confirmation message and the backpack object', function() {

		});
	});
	
	// You could go on! Perhaps you could write tests for (and code) methods like findItem, removeItem, etc!
	
});