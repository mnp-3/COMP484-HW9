//Exercise 1: Complex Arithmetic and Standard Rules
var finalResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log(finalResult);

//Exercise 2: Case Sensitivity Test
var projectIdentifier = 'COMP484';
ProjectIdentifier = 'JS_Advanced'; //reassignment attempt fails because JavaScript is case-sensitve
projectIdentifier = 'JS_Advanced';
console.log(projectIdentifier);

//Exercise 3: String Quoting Challenge
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);

//Exercise 4: Escaping and Console Output
var errorMessage = `An internal server error occurred: \"Access Denied\"`;
console.log(errorMessage);

//Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10;
var valueB = '4';
resultSubtraction = valueA - valueB;
console.log(resultSubtraction);
console.log(typeof resultSubtraction);

resultMultiplication = valueA * valueB;
console.log(resultMultiplication);
console.log(typeof resultMultiplication);

//Exercise 6: Understanding `null` and `undefined` Types
var unassignedVar;
var explicitNull = null;

console.log(typeof unassignedVar); 
console.log(typeof explicitNull); //null data type is the intentional absence of an object value.

//Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
isBlocking = "true"; 
console.log(typeof isBlocking);
