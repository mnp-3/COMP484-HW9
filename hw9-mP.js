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

//Exercise 8: Invalid Variable Naming

//var 1invalidNumber;   You can't make a variable that starts with a number
//var invalid Space;    You can't make a variable that contains a space
//var @symbol;          Variable has to be written with letters, numbers, underscores, and a dollar-sign

//Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5; //shorthand division assignment operator
counterValue -= 3; //shorthand subtraction assignment operator
console.log(counterValue);

//Exercise 10: Prefix vs. Postfix Unary Operators
var x = 10;
var y_post = x++;       // assigns x to y_post
console.log(y_post);    // old value
console.log(x);         // new value, increment happens after assignment

var z_pre = ++x;        // increments z first then assigns value to z_pre
console.log(z_pre);     // new incremnted value
console.log(x);         // same value as z_pre

//Exercise 11: Loose Equality and Coercion
var testNumber = 0;
var testBoolean = false;

if (testNumber == testBoolean) {
    console.log("loosely equal"); //returns true because == performs type coercion. false is converted to 0 and 0 == 0
}

//Exercise 12: Strict Inequality Test
var versionA = 10.0;
var versionB = "10.0";

if (versionA !== versionB) {
    console.log("they are _not_ strictly equal");
} else {
    console.log("they _are_ strictly equal");
}

//Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;

if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;

if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
    console.log("XOR Success");
} else {
    console.log("XOR Fails");
}

//Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;

if (scriptLoadType === "deferred"){
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially blocking";
}
console.log(loadStatus);

var loadStatusTernary = (scriptLoadType === "deferred") ? console.log("Non-blocking") : console.log("Potentially blocking")

//Exercise 16: Commenting and Code Structure
/*
calculateRenderTime function will be used to 
calculate the time taken to parse HTML and execute JavaScript
*/
function calculateRenderTime (){
    //funcion body
}

//Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

var formattedDate = "Today is " + month + "/" + day +"/" + year;
console.log(formattedDate);

//Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";

var sumResult = val1 + val2;
var diffResult = val1 - val2;

console.log(sumResult);
console.log(diffResult);
/*
'+' operator in JavaScript performs both addition and string concatenation resulting in 205 because "5" is a string
'-' operator only performs numeric subtraction so the string "5" is turned into a number
*/

//Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number"){
    console.log("Input is numeric.");
} else {
    dataInput = true;
    console.log(typeof dataInput);
}

