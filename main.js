let screen = document.getElementById("calc-screen");
let result;
let operator;
let reset = false;

function addToScreen(value) {
  if (reset) {
    screen.innerHTML = "";
    reset = false;
  }
  if (value === "." && screen.innerHTML.includes(".")) {
    return;
  }
  screen.innerHTML += value;
}

function addOperator(value) {
  if (operator) {
    calculate();
  } else {
    result = Number(screen.textContent);
    reset = true;
  }
  operator = value;
}

function clearScreen() {
  screen.innerHTML = "";
  result = undefined;
  operator = "";
}

function calculate() {
  // let expression = `${result} ${operator} ${screen.textContent}`;
  // result = eval(expression);
  if (result === undefined) {
    result = Number(screen.textContent);
  }
  switch (operator) {
    case "+":
      result += Number(screen.textContent);
      break;
    case "-":
      result -= Number(screen.textContent);
      break;
    case "*":
      result *= Number(screen.textContent);
      break;
    case "/":
      if (Number(screen.textContent) === 0) {
        result = "Division by zero is not allowed";
      } else {
        result /= Number(screen.textContent);
      }
      break;
  }
  operator = "";
  screen.innerHTML = result;
  reset = true;
}
