const array = [1, 3, 3, 5, 5, 5, 5, 5];
const targetToFind = 5;

const binarySearch = (nums, target, left = 0, right = nums.length - 1) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }

  return -1;
};

/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
*/

function searchRange(arr, target) {
  const firstPos = binarySearch(arr, target);
  if (firstPos === -1) return [-1, -1];
  let startPos = firstPos; //3
  let endPos = firstPos; //3
  let tempL, tempR;

  while (startPos !== -1) {
    tempL = startPos; //3
    startPos = binarySearch(arr, target, 0, startPos - 1); //-1
  }
  startPos = tempL; //3

  while (endPos !== -1) {
    tempR = endPos; //7
    endPos = binarySearch(arr, target, endPos + 1, arr.length - 1); //-1
  }
  endPos = tempR; //7

  return [startPos, endPos];
}

console.log(searchRange(array, targetToFind));
