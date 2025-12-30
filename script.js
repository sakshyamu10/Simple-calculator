let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0,-1)

}
function calculate() {
    try {
        display.value =eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if ((key>=0 && key<=9 || key === ".")) {
        appendValue(key);
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);

    }
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});