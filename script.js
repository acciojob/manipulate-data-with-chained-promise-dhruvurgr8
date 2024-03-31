// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredNumbers = numbers.filter(number => number % 2 === 0);
      resolve(filteredNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(number => number * 2);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Function to update the text of an HTML element with ID "output"
function updateOutput(text) {
  document.getElementById("output").textContent = text;
}

// Chain the promises together
getNumbers()
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then(result => {
    // Update the text of the HTML element with the final result
    updateOutput(result.join(", "));
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
