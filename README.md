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
INSTRUCTIONS
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