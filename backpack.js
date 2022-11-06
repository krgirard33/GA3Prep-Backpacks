const Compartment = require('./compartment.js');

/*
  TDD - Write each test in the spec file BEFORE coding each step below!
*/

class Backpack {

	// 9 - Add main, front, and side parameters and set properties with their values (Component objects)
	// 10 - Throw an error if any of the three are not instances of the Compartment class (hint: write a method to help with this)
	// 11 - Set default values of a new Compartment object on each parameter
	constructor() { 

	}

	// Code method for #10 here


	// 12 - Write a method addItem to add a single item to the backpack, putting it in the correct compartment based on its location property
	// 13 - Modify the method to make sure if the location is null the item is put in the main compartment.
	// 14 - Modify the method to make sure if the side pocket already has an item, the item is not added.
	addItem(item) {

	}

	// 15 - Write a method called fill to take in an array of Item class objects and add them all to the backpack. (Hint: make use of another method you already wrote!) 
	// 16 - The method should return an object with two properties: confirmation (a message indicating success), and itemsAdded (the array of items that were added)
	fill(items) {

	}

  // Want more practice? Write methods like findItem, removeItem, etc!

}

module.exports = Backpack;