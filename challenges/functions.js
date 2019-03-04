// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(arg1, arg2, cb){
  return cb(arg1,arg2)
};

function subtract(arg1,arg2){
  return arg1 - arg2
};

console.log(consume(59,37,subtract));

//takes two arguments, subtracts arg1 from arg2, console logs 22!

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(arg1, arg2, cb){
  return cb(arg1,arg2)
};

function add(arg1,arg2){
  return arg1 + arg2
};

function multiply(arg1,arg2){
  return arg1 * arg2
};
function greeting(first_name,last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`
};


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: There are two passes in the compiler, so through the first pass the compiler checks to see where variables may be in the function, and then when nestedFunction is calling internal, 
//can check to see if there is a variable "internal" using a closure. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();