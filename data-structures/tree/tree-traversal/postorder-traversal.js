// left > right > root
// leet code https://leetcode.com/problems/binary-tree-postorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// @param {TreeNode} root

// recursive way
const postorderTraversal = (root) => {

    //check if root is null
    if (root == null) return;

    //traversing left part
    preorderTraversal(root.left);

    //traversing right part
    preorderTraversal(root.right);

    console.log(root.val);
}