var NodeElement = /** @class */ (function () {
    function NodeElement(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return NodeElement;
}());
function isUniversalTree(tree, value) {
    if (null == tree) {
        return true;
    }
    if (tree.value === value) {
        return isUniversalTree(tree.left, value) &&
            isUniversalTree(tree.right, value);
    }
    return false;
}
/**
 * Count nodes.
 * tree { NodeElement }
 * counter the counter to use { number }
 */
function countNodes(tree) {
    if (null === tree) {
        return 0;
    }
    var left = countNodes(tree.left);
    var right = countNodes(tree.right);
    if (isUniversalTree(tree, tree.value)) {
        return 1 + left + right;
    }
    else {
        return left + right;
    }
}
var nodes = new NodeElement(0, new NodeElement(1), new NodeElement(0, new NodeElement(1, new NodeElement(1), new NodeElement(1)), new NodeElement(0)));
console.log('Nodes number: ' + countNodes(nodes));
