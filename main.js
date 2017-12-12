document.addEventListener("DOMContentLoaded", function() {

   var buttons = document.getElementsByTagName('button');

   for(var i=0; i < buttons.length; i++) {

     buttons[i].addEventListener("click", buttonClicked);
   }



 function buttonClicked(evt) {
var
  document.getElementsByTagName('input')[0].value += evt.srcElement.innerText;
if(evt.srcElement.innerText == "=") {
document.getElementsByTagName('input')[0].value =

}

}

function add (number1, number2) {
  var result = 0;
  return result = number1 + number2;

}
console.log(add(3,5));



function substract(number1, number2) {
  var result = 0;
  return result = number1 - number2;

}
console.log(substract(11, 3));




function multiply(num1, num2) {

  return num1 * num2;
}
console.log(multiply(5, 5));



function division(num1,num2) {

  return num1 / num2;

}
console.log(division(3, 6));



function getReminder(num1, num2) {

  return num1 % num2;

}
console.log(getReminder(50, 3));





});
