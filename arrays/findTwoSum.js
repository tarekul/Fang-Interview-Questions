function findTwoSum(arr, target) {
  //brute force solution
  // for (let i = 0; i < arr.length; i++) {
  //   const numToFind = target - arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === numToFind) return [i, j];
  //   }
  // }
  // return null;

  //optimal solution
  const nums = {};
  for (let i = 0; i < arr.length; i++) {
    nums[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const numToFind = target - arr[i];
    if (nums[numToFind]) return [i, nums[numToFind]];
  }

  return null;
}

console.log(findTwoSum([1, 3, 7, 9, 2], 11));
