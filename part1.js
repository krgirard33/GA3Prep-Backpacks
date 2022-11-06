/*
  Read instructions in the README first!
*/

// Let's start with an empty backpack object
let backpack = {};

// TODO: Set 3 compartments inside backpack - main, front, and side. Everything should be empty for now.
backpack.main = [];
backpack.front = [];
backpack.side = [];
// TODO: Run the program to verify your object has the intended keys and values (there's a console.log at the end of the file already).

// TODO: Create several item objects!
// textbook - put in main compartment
let textbook= {name: "textbook", location: "main"};
// pen - put in front pocket
let pen = {name: "pen", location: "front"};
// water bottle - put in side pocket
let water = {name: "water bottle", location: "side"};
// iPhone - put in front pocket
let iPhone = {name: "iPone", location: "front"};
// notebook - no location yet
let notebook = {name: "notebook", location: null};
// pencil - put in front pocket
let pencil = {name: "pencil", location: "front"};

// TODO: Write a function to add one item to the correct location of the backpack. If the location is unknown, set it to be in the main compartment.
function addItem(item) {
    if(!item.location) {
        item.location = "main";
    }
    backpack[item.location].push(item)
}

// TODO: Create an array that holds all four items. (This will simulate the way data is often received from a database via an API.)
let items = [textbook, pen, water, iPhone, notebook];

// TODO: Use a loop to put each item into the backpack using the function you wrote. After each is added, use a template literal to print "The (name) was added to the (location) of the backpack."
for (const item of items){
  addItem(item);
  console.log(`The ${item.name} was stored in the ${item.location} compartment of the backpack.`)
}

// TODO: Loop through the backpack and print each item in each compartment
for (let compartmentKey in backpack) {
  let compartment = backpack[compartmentKey];
  console.log(`\n${compartmentKey}`)
  for(const item of compartment) {
    console.log(item);
  }
  
}

// Take a look at the entire contents of the backpack so you see the nested data structures!
console.log("\nHere is the entire backpack object:");
console.log(backpack);

// Great job!