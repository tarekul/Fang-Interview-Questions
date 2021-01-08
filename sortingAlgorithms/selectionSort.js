function selectionSort(numbers) {
  let smallestSoFar = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < numbers[smallestSoFar]) {
        smallestSoFar = j;
      }
    }
    swap(numbers, i, smallestSoFar);
  }
  return numbers;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(numbers));
