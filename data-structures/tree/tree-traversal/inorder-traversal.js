// left > root > right
// leetcode https://leetcode.com/problems/binary-tree-inorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// @param {TreeNode} root

const inorderTraversal = (root) => {

    //check if root is null
    if (root == null) return;

    //traversing left part
    inorderTraversal(root.left);

    console.log(root.val);

    //traversing right part
    inorderTraversal(root.right);

}