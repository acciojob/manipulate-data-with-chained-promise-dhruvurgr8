// script.js
const output = document.getElementById('output');

function manipulateArray(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
}

function filterOddNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const oddNumbers = arr.filter((num) => num % 2 === 1);
            resolve(oddNumbers);
        }, 1000);
    });
}

function multiplyEvenByTwo(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArr = arr.map((num) => (num % 2 === 0 ? num * 2 : num));
            resolve(multipliedArr);
        }, 2000);
    });
}

const inputArray = [1, 2, 3, 4];

manipulateArray(inputArray)
    .then(filterOddNumbers)
    .then((result) => {
        output.textContent = result.join(', ');
        return multiplyEvenByTwo(inputArray);
    })
    .then((finalResult) => {
        output.textContent = finalResult.join(', ');
    })
    .catch((error) => {
        console.error(error);
        output.textContent = 'Error occurred';
    });
