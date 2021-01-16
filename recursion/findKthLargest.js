function findKthLargest(nums, k, left = 0, right = nums.length - 1) {
  if (k - 1 > right) return null;

  const pivIdx = pivHelper(nums, left, right);
  if (pivIdx === k - 1) return nums[pivIdx];
  else if (pivIdx < k - 1) return findKthLargest(nums, k, pivIdx + 1, right);
  else if (pivIdx > k - 1) return findKthLargest(nums, k, left, pivIdx - 1);
  else return null;
}

function pivHelper(arr, start, end) {
  let p = arr[start];
  let place = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] >= p) {
      place++;
      swap(arr, i, place);
    }
  }
  swap(arr, start, place);

  return place;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(findKthLargest([5, 3, 3, 6, 4, 2], 3));

//[2,3,1,4,5,6]
