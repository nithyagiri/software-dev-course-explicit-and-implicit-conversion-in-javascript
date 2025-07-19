/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let firstValue ="5";
console.log( " Before conversion:" + firstValue +" type is "+ typeof(firstValue));
let convertedValue1 =  Number(firstValue)
let result = convertedValue1 - 2; // string "5" is converted into number using Number() function
console.log( " After conversion:" + firstValue +" type is "+ typeof(convertedValue1));
console.log("The result is: " + result );
console.log ("*****************************")

let cond= "false"
console.log( " Before conversion " + cond+" type is "+ typeof(cond));
let isValid = Boolean( Number(cond)); // False means its falsy but since its within double quotes,its considered as string and returns 1. so by using Number() function it returns actual value 0
console.log( " After conversion " + isValid +" type is "+ typeof(isValid)+ "and value is :" +isValid);

if (isValid) {
    console.log("This is valid!");
} 

console.log ("*****************************")
let age = "25";
console.log( " Before conversion age " + age +" type is "+ typeof(age));
let convAge = Number(age);
let totalAge = convAge + 5; //string "age" is converted into number using Number() function as Age is a number and concatenation will be done if it is not converted to number which is wrong
console.log( " After conversion age " + age +" type is "+ typeof(convAge));
console.log("Total Age: " + totalAge);
console.log ("*****************************")

//Example of implicit function
let subtractValue = "100" - 50 ;   //"100" is a string but implicitly it is converted into number before subtraction
console.log("the subtraction result is " + subtractValue )

//Example of explicit function
let value = "13.678"
console.log(" the float value is "+ parseFloat(value)); // parseFloat  does the explicit conversion of a string to float integer
