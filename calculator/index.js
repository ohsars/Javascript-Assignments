"use strict"
let screen = "0"
const display = document.querySelector(".calculatorDisplay");

function buttonClick(value) {
    isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
    rerender();
}

function handleNumber(number) {
    (screen === '0') ? (screen = number) : (screen += number);

}

function handleSymbol(symbol) {
    switch (symbol) {
        case "🗑️" :
            screen = "0";
            break
        case "✔️" :
            console.log('equals');
            break
        case "←" : 
            (screen.length === 1 ? screen = "0" : screen = screen.substring(0, screen.length - 1));
            break
        case "➕":
            console.log("Addition");
            break
        case "➖":
            console.log("minus");
            break
        case "❌":
            console.log("multiply");
            break
        case "➗":
            console.log("divide");
    }
}

function init() {
    console.log("first");
    document.querySelector(".calculatorkeys").addEventListener("click", function(event) {
        buttonClick(event.target.innerText)
    })
} 

function rerender() {
    display.innerText = screen
}

init() 