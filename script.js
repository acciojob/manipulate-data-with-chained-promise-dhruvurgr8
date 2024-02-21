const output = document.querySelector("#output");
output.textContent = "null";
const arr = [1, 2, 3, 4];

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr);
    }, 3000);
});

promise.then((arr) => {
    let oddNumbersStr = "";

    setTimeout(() => {
        arr.filter((element) => {
            if (element % 2 === 1) {
                oddNumbersStr += element + " ";
            }
        });

        output.textContent = oddNumbersStr;
    }, 1000);

    return arr;
}).then((arr) => {
    let evenNumbersStr = "";

    setTimeout(() => {
        arr.filter((element) => {
            if (element % 2 === 0) {
                evenNumbersStr += element * 2 + " ";
            }
        });

        output.textContent += evenNumbersStr; // Use += to append to existing content
    }, 2000);
});
