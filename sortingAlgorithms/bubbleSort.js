function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let noSwap = true;
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swap(numbers, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) return numbers;
  }
  return numbers;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(numbers));
