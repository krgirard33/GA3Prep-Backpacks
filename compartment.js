const Item = require('./item.js');

/*
  TDD - Write each test in the spec file BEFORE coding each step below!
*/

class Compartment {

	// 6 - Add an items parameter and set an items property with it
	// 7 - Throw an error if any of the items in the array are not instances of the Item class (hint: write a method to help with this)
	// 8 - Give the items parameter a default value of an empty array
	constructor(items = []) {
		this.items = items;
		if (this.hasInvalidItem()) {
			throw Error("All items must be valid instances of the Item class.");
		}

		// Code method for #7 here
		hasInvalidItem() {
			for (let i = 0; i < this.items.length; i++) {
				if (!(this.items[i] instanceof Item)) {
					return true
				}
			}
			return false;
		}
	}
}

module.exports = Compartment;