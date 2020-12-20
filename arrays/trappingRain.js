function trappingRainWater(heights) {
  let totalWater = 0;
  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    totalWater += currentWater;
  }

  return totalWater;
}

//console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

function trappingRnWtrOptimized(heights) {
  let pL = 0,
    pR = heights.length - 1,
    maxLeft = 0,
    maxRight = 0,
    totalWater = 0;

  while (pL !== pR) {
    if (heights[pL] <= heights[pR]) {
      if (heights[pL] < maxLeft) totalWater += maxLeft - heights[pL];
      else maxLeft = heights[pL];
      pL++;
    }
    if (heights[pL] > heights[pR]) {
      if (heights[pR] < maxRight) totalWater += maxRight - heights[pR];
      else maxRight = heights[pR];
      pR--;
    }
  }
  return totalWater;
}
console.log(trappingRnWtrOptimized([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
/*
current water = min(maxL,maxR) - cH


*/
