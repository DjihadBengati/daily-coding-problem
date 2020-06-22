class NodeElement {
    constructor(
        public value: number,
        public left: NodeElement = null,
        public right: NodeElement = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * Is it an universal tree ?
 * @param tree the root
 * @param value the value of the root
 */
function isUniversalTree(tree: NodeElement, value: number): boolean {
    // If the root is null return true
    if (null == tree) {
        return true;
    }

    // If the node value is the same as the root one
    if (tree.value === value) {
        // We check the left side and the right side
        return isUniversalTree(tree.left, value) &&
            isUniversalTree(tree.right, value);
    }

    // else we return false
    return false;
}

/**
 * Count nodes.
 * tree { NodeElement }
 * counter the counter to use { number }
 */
function countNodes(tree: NodeElement) {

    // If the tree is null we return 0
    if (null === tree) {
        return 0;
    }

    // Else we count left nodes
    let left = countNodes(tree.left);

    // And we count right nodes
    let right = countNodes(tree.right);

    // If the tree is an universal one we add the root to the result
    if (isUniversalTree(tree, tree.value)) {
        return 1 + left + right;
    } 
    // Else we return only the sum of the right and left nodes number
    else {
        return left + right;
    }
}

// Create a tree like in the example
const nodes = new NodeElement(0,
    new NodeElement(1),
    new NodeElement(0,
        new NodeElement(1,
            new NodeElement(1),
            new NodeElement(1)
        ),
        new NodeElement(0)
    )
);

console.log('Nodes number: ' + countNodes(nodes));