const display = document.getElementById("display");

let currentInput = "";


function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function appendValue(value) {
    const lastChar = currentInput.slice(-1);

    if (isOperator(value) && isOperator(lastChar)) return;

    if (value === "." ) {
        const parts = currentInput.split(/[\+\-\*\/]/);
        if (parts[parts.length - 1].includes(".")) return;
    }
    currentInput += value;
    display.value = currentInput;
}

function cleardisplay() {
    currentInput = "";
    display.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch {
        display.value = "Error";
        currentInput = "";
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (value) appendValue(value);
        if (action === "clear") cleardisplay();
        if (action === "delete") deleteLast();
        if (action === "equal") calculateResult();
    });
});

document.addEventListener("keydown", function(e) {
    const key = e.key;
    if (key === "Enter") {
        e.preventDefault();
        calculateResult();
        return;
    }  else if (key === "Backspace") {
        deleteLast();
        return;
    } else if (key === "Escape") {
        cleardisplay();
        return;
    } else if (!isNaN(key) ||  key === "." || "+-*/".includes(key)) {
        appendValue(key);
    }
});