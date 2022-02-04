/* 
    # Adelson-Velskii and Landi's tree - AVL tree

    It is the same as a binary search tree but self balanced
    Lookups on average are O(log n) - Really fast
    Databases uses AVLTree for its ids
*/

export class Node {
    value: number;
    left: Node;
    right: Node;
    
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class AVLTree {
    root: Node;

    constructor() {
        this.root = null;
    }

    get height() {
        return this.getNodeHeight(this.root);
    }

    insert(value: number) {
        if (!this.root) this.root = new Node(value);
        else this.insertNode(this.root, value);
    }

    private insertNode(node: Node, value: number) {
        if (node.value > value) {
            // Go left
            if (node.left) this.insertNode(node.left, value)
            else node.left = new Node(value);
            
        } else {
            // Go right
            if (node.right) this.insertNode(node.right, value)
            else node.right = new Node(value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inOrderTraverse(callback: (n: any) => any) {
        this.inOrderTraverseNode(this.root, callback);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private inOrderTraverseNode(node: Node, callback: (n: any) => any) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    toObject() {
        return this.root;
    }

    getNodeHeight(node: Node): number {
        if (node === null) return -1;

        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    min() {
        return this.minNode(this.root);
    }

    private minNode(node: Node) {
        let current = node;
        while (current !== null && current.left !== null) {
            current = current.left;
        }

        return current
    }

    max() {
        return this.maxNode(this.root);
    }

    private maxNode(node: Node) {
        let current = node;
        while (current !== null && current.right !== null) {
            current = current.right;
        }

        return current
    } 
}