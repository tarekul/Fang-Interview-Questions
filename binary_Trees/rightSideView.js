//breadth first search
function rightSideView(root) {
  if (root === null) return [];

  const queue = [root];
  const res = [];
  let rightMost;
  let maxLevel = 1;
  let count = 0;

  while (queue.length) {
    const out = queue.pop();
    rightMost = out.val;
    count++;

    if (out.left) queue.unshift(out.left);
    if (out.right) queue.unshift(out.right);

    if (count === maxLevel) {
      res.push(rightMost);
      maxLevel = queue.length;
      count = 0;
    }
  }

  return res;
}

//depth first search
/*
pre-order : [1,3,6,2,5,4,7,8] NRL
inorder : [6,3,1,5,2,7,8,4]
post-order : [6,3,5,8,7,4,2,1]

[1,3,6,9,11]


        1
      2   3
    4

[1,3,*]
*/

function rightSideView2(root, res = [], level = 0) {
  if (root === null) return res;

  if (level >= res.length) res.push(root.val); //[1,3,4]

  if (root.right) rightSideView2(root.right, res, level + 1);
  if (root.left) rightSideView2(root.left, res, level + 1);

  return res;
}
