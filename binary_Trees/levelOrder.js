function levelOrder(root) {
  if (root === null) return [];

  let maxLevel = 1;
  let count = 0;
  let res = [];
  let queue = [root];
  let level = [];

  while (queue.length) {
    const out = queue.pop();
    level.push(out.val);
    count++;

    if (out.left) queue.unshift(out.left);
    if (out.right) queue.unshift(out.right);

    if (count === maxLevel) {
      res.push(level);
      level = [];
      count = 0;
      maxLevel = queue.length;
    }
  }
  return res;
}

/*
maxLevel = 0;
count = 0;
res = [[3],[6,1],[9,2,4],[5],[8]];
queue = [];
level = [];
out = 8
*/
