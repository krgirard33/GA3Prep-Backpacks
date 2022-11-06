BACKPACKS, PART 1 - GRADED ASSIGNMENT #3 PREP
by Carrie Jones

Revised November 2022

This exercise is just focused on creating and manipulating complex objects. Part 2 (linked below) will actually deal with classes and TDD.

Live tutorial recording: https://youtu.be/Tu-wndMkWhE

Solution for Part 1:
https://replit.com/@CarolineRose/GA3Prep-BackpacksPart1#index.js

Starter code for Part 2: https://replit.com/@CarolineRose/GA3Prep-BackpacksPart2-StarterCode#README.txt

For more JS examples and practice problems, see the following document: https://tinyurl.com/y3bn6st4


************
INSTRUCTIONS -- Part 1
************

You will be creating a backpack object that has three compartments:
 - main compartment (array of objects)
 - front pocket (array of objects)
 - side pocket (array with exactly one object)

Each item inside a compartment is an object with two properties:
 - name (string)
 - location (string or null)

Follow the TODOs in index.js to code each step along the way. When you are done, your backpack object should look like this:

{
  main: [
    { name: 'textbook', location: 'main' },
    { name: 'notebook', location: 'main' }
  ],
  front: [
    { name: 'pen', location: 'front' },
    { name: 'iPhone', location: 'front' },
    { name: 'pencil', location: 'front' }
  ],
  side: [ { name: 'water bottle', location: 'side' } ]
}

************
INSTRUCTIONS -- Part2
************

You will be defining three classes: Item, Compartment, and Backpack (in that order). 

For each test, practice TDD:
  1. Read the instruction in the class file to understand what the expected behavior is
  2. Write the test in the spec file
  3. Run the tests to ensure the test fails
  4. Go back to the class file and write just the code that makes that specific test pass

ITEM (SPECIFICATIONS 1-5)
An item can be anything that will be placed inside one of the three compartments of the backpack. Each item just requires a name and a location. The location must be one of three values:
	- "main"
	- "front"
	- "side"
These can be used as keys in a few places and will be handy!

COMPARTMENT (SPECIFICATIONS 6-8)
A compartment has a single property, items, which is an array of Item objects. It should be able to be instantiated with items or as an empty array by default.

BACKPACK (SPECIFICATIONS 9-16)
A backpack has three properties: main, front, and side. Each of them should be a single instance of the Compartment class and they should all be empty when the backpack itself is instantiated.


*** GENERAL INFO AND TIPS ***

COMPOSITION
Instantiating an object of one class as the value of a property for another class is called composition. This is not the same thing as inheritance! 

CHECKING THAT OBJECT IS INSTANCE OF A CLASS
Use the instanceof keyword to see if an object is actually an instance of a specific class.

WRITING COHERENT SPECIFICATIONS
When writing unit tests, make sure your string arguments form coherent sentences starting with the outer describe block and moving inward to each specification (it block).

Example: "The Backpack class can instantiate an object with no arguments and its properties will have the correct default values"

DEEP EQUALITY WITH OBJECTS OF CLASSES
Unit testing classes with modern Jasmine matchers can be tricky because .toEqual() will not correctly compare the deep equality of a generic object with an object created from a class, and the fine folks who maintain Jasmine evidently rejected the suggestion that they come up with a matcher that handles this (oh well). 

Instead, you have to drill down with dot and bracket notation and compare values of specific properties within those objects. This exercise will give you lots of practice with this.
