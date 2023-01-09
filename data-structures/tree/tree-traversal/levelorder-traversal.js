// Input: root = [3,9,20,null,null,15,7]
// Output: [3,9,20,15,7]
// Leetcode https://leetcode.com/problems/binary-tree-level-order-traversal/description/


const levelOrderTraversal = (node) => {
    if (node == null) return [];

    let result = [];
    let currentLevelNodes = [node];
    while (currentLevelNodes.length != 0) {
        let currentNode = currentLevelNodes.shift();
        result.push(currentNode.val);
        if (currentNode.left) currentLevelNodes.push(currentNode.left);
        if (currentNode.right) currentLevelNodes.push(currentNode.right);
    }
    return result;
}