// root > left > right
// leetcode https://leetcode.com/problems/binary-tree-preorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// @param {TreeNode} root

// recursive way
const preorderTraversal = (root) => {

    //check if root is null
    if (root == null) return;

    //printing root node
    console.log(root.val);

    //traversing left part
    preorderTraversal(root.left);

    //traversing right part
    preorderTraversal(root.right);
}