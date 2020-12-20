function mostWaterContainer(height) {
  if (height.length <= 1) return 0;
  let i = 0,
    j = height.length - 1,
    maxArea = 0;
  while (i < j) {
    const width = Math.min(height[i], height[j]);
    const length = j - i;
    const area = width * length;
    maxArea = Math.max(area, maxArea);

    if (height[i] < height[j]) i++;
    else j--;
  }
  return maxArea;
}

console.log(mostWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
