// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// var result = multiply(number1, number2);
// alert(result);
//
// var bmi = function(weight, height) {
//   return weight / (height * height);
// };
//
// var weight = parseInt(prompt("Enter your mass in kg"));
// var height = parseInt(prompt("Enter your height in m"));
//
// var result2 = bmi(weight, height);
// alert(result2);

// var ctof = function(celsius) {
//   return (((celsius*9)/5)+32);
// };
//
// var cel = parseInt(prompt("Enter temp is celsius"));
//
// var result3 = ctof(cel);
// alert(result3);

var gal2lit = function(gallon) {
  return (gallon*3.785);
};

var gal = parseInt(prompt("Enter volume in gallons"));

var result4 = gal2lit(gal);
alert(result4);
