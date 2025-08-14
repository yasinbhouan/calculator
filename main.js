let calculation = '';
let display = document.getElementById("resultDisplay");

// Function to update display
function updateDisplay() {
    display.value = calculation;
}

// AC button
document.getElementById("clear").onclick = () => {
    calculation = '';
    updateDisplay();
};

// Number and operator buttons
document.querySelectorAll('.calc__row .btn').forEach(button => {
    if (
        button.id !== "clear" &&
        button.id !== "delete" &&
        button.id !== "equal"
    ) {
        button.onclick = () => {
            calculation += button.textContent.trim();
            updateDisplay();
        };
    }
});

// Delete button
document.getElementById("delete").onclick = () => {
    calculation = calculation.slice(0, -1);
    updateDisplay();
};

// Equal button
document.getElementById("equal").onclick = () => {
    try {
        calculation = eval(
            calculation
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
        ).toString();
    } catch {
        calculation = "Fucked Up";
    }
    updateDisplay();
};

// Percentage button
document.getElementById("percentage").onclick = () => {
    try {
        calculation = (eval(calculation) / 100).toString();
    } catch {
        calculation = "Error";
    }
    updateDisplay();
};
