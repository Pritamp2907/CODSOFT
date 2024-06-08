const displayScreen = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentOperation = '';
let previousOperation = '';
let result = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        const buttonId = e.target.id;

        if (buttonId === 'clear') {
            displayScreen.value = '';
            currentOperation = '';
            previousOperation = '';
            result = 0;
        } else if (buttonId === 'equals') {
            if (currentOperation !== '') {
                result = eval(currentOperation);
                displayScreen.value = result;
                currentOperation = '';
            }
        } else if (buttonId === 'divide' || buttonId === 'multiply' || buttonId === 'subtract' || buttonId === 'add') {
            if (currentOperation !== '') {
                currentOperation += buttonText;
                displayScreen.value = currentOperation;
            } else {
                currentOperation = displayScreen.value + buttonText;
                displayScreen.value = currentOperation;
            }
        } else {
            if (currentOperation === '') {
                currentOperation = buttonText;
                displayScreen.value = currentOperation;
            } else {
                currentOperation += buttonText;
                displayScreen.value = currentOperation;
            }
        }
    });
});