// const num1 = parseFloat(document.getElementById('num1').value);
// const num2 = parseFloat(document.getElementById('num2').value);
// const operator = document.getElementById('operator').value;

const calculate = () => {
    
    const num1 = Number(document.getElementById('num1').value);
    console.log(num1);
    const num2 = Number(document.getElementById('num2').value);
    console.log(num2)
    const operator = document.getElementById('operator').value;
    console.log(operator);

    let result;

    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operation';
    }

    
    if (!isNaN(result)) {
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = `Invalid input`;
    }
}