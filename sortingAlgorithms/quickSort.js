function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right - left >= 1) {
    const pivIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivIdx - 1);
    quickSort(arr, pivIdx + 1, right);
  }
  return arr;
}

const pivotHelper = (arr, start, end) => {
  const pivot = arr[start];
  let place = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      place++;
      swap(arr, i, place);
    }
  }
  swap(arr, start, place);

  return place;
};
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const numbers = [6, 44, 99, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers));
console.log(quickSort([5, 2, 1, 8, 4, 7]));

/*
[5, 2, 1, 8, 4, 7]
[4,2,1,5,8,7]
[4,2,1]    [8,7]


*/
