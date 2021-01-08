const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[0]) numbers.unshift(numbers.splice(i, 1)[0]);
    else {
      for (let j = i; j > 0; j--) {
        if (numbers[j] < numbers[j - 1]) swap(numbers, j, j - 1);
      }
    }
  }
  return numbers;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

insertionSort(numbers);
console.log(numbers);
