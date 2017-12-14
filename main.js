document.addEventListener("DOMContentLoaded", function() {

  var buttons = document.getElementsByTagName('button');

  for(var i=0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", buttonClicked);
  }
});
//following function is used when  the button event is clicked ;
var operation = '';

function buttonClicked(evt) {

  var src = evt.srcElement.textContent.trim();

  if (src === '=') {

    var numbers = document.getElementById('input').value.split(operation);

    var num1 = Number(numbers[0]);
    var num2 = Number(numbers[1]);

    console.log('number 1 is : ' + num1);
    console.log('number 2 is : ' + num2);

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
