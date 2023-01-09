//  left > root > right

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// @param {TreeNode} root

const postorderTraversal = (root) => {

    //check if root is null
    if (root == null) return;

    //traversing left part
    preorderTraversal(root.left);

    console.log(root.val);
    
    //traversing right part
    preorderTraversal(root.right);

}