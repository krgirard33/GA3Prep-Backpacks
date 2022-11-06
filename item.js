/*
  TDD - Write each test in the spec file BEFORE coding each step below!
*/

// NOTE: SPECS 4 & 5 were originally in reverse order

class Item {

	// 1 - Add a name parameter and set the name property with it
	// 2 - Throw an error if no name is provided at instantiation
	// 3 - Add a location parameter and set a location property with it
	// 4 - Give the location parameter a default value of null
	// 5 - Throw an error if location is provided but it is invalid (hint: write a method to help with this)
	constructor(name, location = null) {
	  this.name = name;
	  if (!name) {
		throw Error("Name of item is required");
	  }
	  this.location = location;
	  if (location && !this.isValidLocation()) {
		throw Error("Valid location is required");
	  }
	}
  
  // Code method for #5 here
	isValidLocation() {
	  let validLocations = ["main", "front", "side"];
	  return validLocations.includes(this.location);
	}
  }
  
  module.exports = Item;