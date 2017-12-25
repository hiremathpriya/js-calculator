
//when html content is loaded the following DOM content loaded will be called.//
document.addEventListener("DOMContentLoaded", function() {
// here we are adding addEventListener function wihch take two parameters one
//"DOMContentLoaded and another function"which will excute all the code from your file.
  var buttons = document.getElementsByTagName('button');
// declaring the variable button. and getitng it by getElementsByTagName from html.
  for(var i=0; i < buttons.length; i++) {
//Here we are iterating over buttons to add "click"  when button is clicked.
    buttons[i].addEventListener("click", buttonClicked);
  }
});
//following function is used when  the button event is clicked ;
var operation = '';
//creating another variable to do the oprations
function buttonClicked(evt) {
//now we create function buttonclicked which takes one parammeter event.
  var src = evt.srcElement.textContent.trim();
  //this line was tricky to understand but here it says variable source =
  //event get sourceelement and the text which has on the source element,
  //and just give me the text from that not a empty spaces around it. that's why we used trim.
console.log(src);
// console to check what it is prinintg.
if(src === 'C' || src === 'AC') {
  //created clear function for "C "and "Ac"
  clear();
  //Do above when we have to clear the text box otherwise do the part after the else.
}else {



  if (src === '=') {

    var numbers = document.getElementById('input').value.split(operation);
// here we are trying to split the values we input in the text box.
    var num1 = Number(numbers[0]);
    var num2 = Number(numbers[1]);

    console.log('number 1 is : ' + num1);
    console.log('number 2 is : ' + num2);
// we are adding switch operator to do different operations.
    switch (operation) {
      case '+':
      add(num1, num2);
      break;
      case '-':
      subtract(num1, num2);
      break;
      case '/':
      divide(num1, num2);
      break;
      case '*':
      multiply(num1, num2);
      break;
      default:
      break;

    }


  } else {
    document.getElementById('input').value += src;
  }

  if (src === '+' || src === '-' || src === '/' || src == '*') {
    operation = src;
  }
}
//Addition function for calculator

function add(num1, num2 ) {

  var result = num1 + num2;

  console.log('The result of addition is : ' + result);

  document.getElementById('input').value = result;
}
}
//substraction function for calculator

function subtract(num1, num2) {
  var result = num1 - num2;
  console.log('the result of addition is :' + result);


  document.getElementById('input').value = result;
}

// multiplication function for calculator

function multiply(num1, num2) {

  var result = num1 * num2;
  console.log('the result of multiplication is :' + result);

  document.getElementById('input').value = result;
}


// division function for calculator

function divide(num1, num2) {
  var result = num1 / num2;
  console.log('the result of division is:' + result);

  document.getElementById('input').value = result;
}

// remainder function for calculator

function remainder (num1, num2) {
  var result = num1 % num2;
  console.log('the result of remainder is :' + result);

  document.getElementById('input').value = result;
}

function clear() {


document.getElementById('input').value = "";
}
