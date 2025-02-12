/*------------------------ Function and Block Scope ---------------------------- */
// Function scope and block scope behave similarly, so it makes sense to bundle these types of scope when we’re thinking about them.
// Both function and block scope in JavaScript deal with where you can access a variable.

// In simpler terms, if you declare a variable inside curly braces { }, whether it’s part of a function or a code block, that variable can only be used within those curly braces.
// This helps keep your code organized and avoids conflicts between variables.

const addNums = (numA) => {
  // Inside the addNums function
  const numB = 10;

  console.log(numA + numB);
  // Output: 15
};

addNums(5);

// Outside the addNums function:
console.log(numB);
// ERROR: ReferenceError: numB is not defined
// numB is out of scope!

console.log("------------------------");

let isLoggedIn = true;

if (isLoggedIn) {
  // Defining username inside the if block
  const username = "Frisco";

  console.log(username);
  // Output: 'Frisco'
}

// Outside the if block:
console.log(username);
// ERROR: ReferenceError: username is not defined

console.log("------------------------");

const chooseDinner = () => {
  let isHungry = true;
  let mainDish;

  if (isHungry) {
    mainDish = "meatloaf";
  } else {
    mainDish = "corn";
  }
  // Note how variables that are part of the outer function scope
  // (created by the function) are available to blocks inside its scope!

  console.log(`Dinner tonight is ${mainDish}`);
  // Prints: 'Dinner tonight is Meatloaf'
};

chooseDinner();

// Outside of the function, the variables declared within are unavailable.
console.log(mainDish);
// ERROR: ReferenceError: mainDish is not defined

console.log("Global Scope");
/*------------------------ Global Scope ---------------------------- */
//Any variable declared outside a function or block will live in the global scope.

let mainDish;

const chooseDinnerGlobalScope = () => {
  let isHungry = true;

  if (isHungry) {
    // We are able to modify the global mainDish variable
    mainDish = "meatloaf";
  } else {
    mainDish = "corn";
  }
  // Note how variables in the global scope can be modified anywhere!

  console.log(`Dinner tonight is ${mainDish}`);
  // Prints: 'Dinner tonight is Meatloaf'
};

chooseDinnerGlobalScope();

// Because mainDish was declared in the global scope, it is available.
console.log(mainDish);
// Prints: 'meatloaf'

console.log("------------------------");

/*------------------------ Scope chain ---------------------------- */
//What is a scope chain?

// The scope chain is a mechanism that allows JavaScript to find variables and functions when they are referenced in code. It’s a chain of
// scopes, where each scope is a collection of variables and functions accessible within that scope.

// When a variable or function is referenced in code, the JavaScript engine searches the scope chain for that variable or function, starting
// from the innermost scope and working its way out. If the variable or function is not found in any of the scopes, the app will crash due to a
// 'ReferenceError'.

// Global scope
let friendName = "Burt";

const greet = () => {
  // Function scope
  let message = "Hello, " + friendName + "!";
  console.log(message);
};

greet();
// Output: 'Hello, Burt!'

// You can go up the scope but not down it!
// A key takeaway is that functions have access to the set of variables and functions defined within their own scope AND in the outer
// scopes. When a line of code accesses a variable (or function), JS will traverse up the scope chain until it finds what it’s looking for.

// This means we can access variables and functions declared in the global scope from within any function. However, we cannot access
// variables and functions declared inside a function from outside of that function.

// If the JS runtime engine gets to the global scope (the top of the food chain in the scope hierarchy) and still can’t find what it’s looking for, our program
// ceases due to a ReferenceError.

let a = 4;

const foo = (x) => {
  let b = a * 4;

  const bar = (y) => {
    let c = y * b;
    return c;
  };

  return bar(b);
};

console.log(foo(a));
// Output: 64

console.log("------------------------");

/*------------------------ The var Keyword ---------------------------- */
const varTest = () => {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
};

const letTest = () => {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
};

// Var hoisting
const hoist = () => {
  console.log(x); // prints: undefined, not a ReferenceError
  var x = 25;
  console.log(x); // prints: 25
};

/*------------------------ More about global scope ---------------------------- */
// Learning objective: By the end of this lesson, students will understand the concept of global scope in JavaScript, particularly the role of
// the window object in browsers.

// The window object represents the global scope in our browsers. This means it is at the top of the scope chain, and its properties are
// available to every function we write.

// It is generally bad practice for our programs to create variables in the global scope because this can overwrite data that JavaScript
// libraries, frameworks, or other routines use.

// Creating many global variables is known as “polluting the global scope.” When we define a variable (or function) in the global scope, it
// becomes a property of the window object. We can see this in action by adding var pollution = 'is bad' to our code, then add a
// console log for window.pollution (don’t forget the dot). If we run the code, we will see "is bad" console logged.

/*------------------------ Temporal deadzone ---------------------------- */
// This will log `undefined` to the console.
console.log(varVariable);
var varVariable = 10;

// This will throw a `ReferenceError`: `Cannot access letVariable before initialization`.
console.log(letVariable);
let letVariable = 20;
