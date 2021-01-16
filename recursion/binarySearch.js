const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }

  return -1;
};

console.log(binarySearch([2, 5], 5));

const binarySearchRec = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  else if (left === right) return -1;
  else if (nums[mid] < target)
    return binarySearchRec(nums, target, mid + 1, right);
  else if (nums[mid] > target)
    return binarySearchRec(nums, target, left, mid - 1);
};

console.log(binarySearchRec([2, 5], 2));
