const converterButton = document.getElementById('convert-btn');

const numberInput = document.getElementById('number');

const outputDiv = document.getElementById('output');

converterButton.addEventListener("click", () => {
    const inputValue = parseInt(numberInput.value);
    if (inputValue === '') {
        outputDiv.innerText = "Please Enter a Number"
    } else if (inputValue < 1) {
        outputDiv.innerText = "Please Enter a Number Greater than or Equal to 1"
    } else if (inputValue > 3999) {
        outputDiv.innerText = "Please Enter a Number Less than or Equal to 3999"
    }
    else {
        let result = '';
        let normal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

        let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

        let index = (normal.length) - 1;
        let num = inputValue;

        while (num !== 0) {
            let quotient = Math.floor(num / normal[index]);
            num = num % normal[index];
            while (quotient > 0) {
                result += (roman[index])
                quotient--;
            }
            index--;
            outputDiv.innerText = `Equivalent Roman Numeral of ${inputValue} is ${result}`;
        }
    }
});