"use strict";
let screen = "0";
let previousOperator = "";
let runningTotal = 0;
const display = document.querySelector(".calculatorDisplay");

function buttonClick(value) {
  isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
  rerender();
}

function handleNumber(number) {
  screen === "0" ? (screen = number) : (screen += number);
}

function handleMath (value) {
  if (screen === "0") {
    // do nothing
    return;
  }

  const intScreen = parseInt(screen);
  (runningTotal === 0) ? (runningTotal = intScreen) : flushOperation(intScreen);

  previousOperator = value;
  screen = "0";
  console.log(runningTotal);
};

function flushOperation (intScreen) {
  if (previousOperator === "➕") {
    runningTotal += intScreen;
  } else if (previousOperator === "➖") {
    runningTotal -= intScreen;
  } else if (previousOperator === "❌") {
    runningTotal *= intScreen;
  } else if (previousOperator === "➗") {
    runningTotal /= intScreen;
  }
};

function handleSymbol(symbol) {
  switch (symbol) {
    case "🗑️":
      screen = "0";
      break;
    case "✔️":
      if (previousOperator === null ) {
        // do nothing
        return;
      }
      flushOperation(parseInt(screen));
      previousOperator = "";
      screen = "" + runningTotal;
      runningTotal = 0;

      break;
    case "←":
      screen.length === 1
        ? (screen = "0")
        : (screen = screen.substring(0, screen.length - 1));
      break;
    case "➕":
    case "➖":
    case "❌":
    case "➗":
      handleMath(symbol);
      break
  }
}

function init() {
  document
    .querySelector(".calculatorkeys")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

function rerender() {
  display.innerText = screen;
}

init();
