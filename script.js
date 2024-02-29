// script.js
const output = document.getElementById('output');

function manipulateArray(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
}

function filterEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyByTwo(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArr = arr.map(num => num * 2);
            resolve(multipliedArr);
        }, 2000);
    });
}

const inputArray = [1, 2, 3, 4];

manipulateArray(inputArray)
    .then(filterEvenNumbers)
    .then(result => {
        output.textContent = result.join(', ');
        return multiplyByTwo(result);
    })
    .then(finalResult => {
        setTimeout(() => {
            output.textContent = finalResult.join(', ');
        }, 2000);
    })
    .catch(error => {
        console.error(error);
        output.textContent = "Error occurred";
    });
