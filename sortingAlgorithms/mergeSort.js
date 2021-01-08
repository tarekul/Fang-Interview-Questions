function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;

  const sortedArr = [];

  while (i !== left.length || j !== right.length) {
    if (left[i] <= right[j] || j === right.length) {
      sortedArr.push(left[i]);
      i++;
    } else if (right[j] < left[i] || i === left.length) {
      sortedArr.push(right[j]);
      j++;
    }
  }

  return sortedArr;
}

// console.log(merge([3], [1]));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(numbers));
