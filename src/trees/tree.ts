type ITree = {
    value: number;
    children: ITree[];
};

export class Tree {
    value: number;
    children: ITree[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }

    insertChild(value: number) {
        const newTree = new Tree(value);
        this.children.push(newTree);

        return newTree;
    }

    removeChild(value: number) {
        this.children = this.children.filter((item) => item.value !== value);
    }
}

// CHATBOT
export class RecommendationTree {
    question: string;
    yes: ITree[];
    no: ITree[];

    constructor(question: string) {
        this.question = question;
        this.yes = [];
        this.no = [];
    }

    insertChild(question: string, side: string) {
        const newQuestion = new RecommendationTree(question);
        this[side] = newQuestion;

        return newQuestion;
    }
}


// Tree Traversal
type IFamilyTree = {
    name: string;
    children: IFamilyTree[];
};
export function traverse(tree: IFamilyTree) {
    console.log(tree.name);
    tree.children.forEach((child) => traverse(child));
}

////////////////
// Binary Tree

interface ITraverseCB {
    (value: number): void;
}
interface IBinaryTree {
    value: number;
    left: IBinaryTree;
    right: IBinaryTree;
    traverse: (func: ITraverseCB) => void;
    contains: (value: number) => boolean;
}

export class BinaryTree implements IBinaryTree {
    value: number;
    left: IBinaryTree;
    right: IBinaryTree;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Explores all nodes of the tree
    traverse(func: ITraverseCB) {
        func(this.value);
        if (this.left) this.left.traverse(func);
        if (this.right) this.right.traverse(func);
    }

    // Returns true if value is found
    contains(value: number): boolean {
        if (this.value === value) return true;
        const leftContains = this.left && this.left.contains(value);
        const rightContains = this.right && this.right.contains(value);

        return leftContains || rightContains;
    }

    // Counts the total number of nodes contained in the tree
    countNodes(node: IBinaryTree): number {
        if (node === null) return 0;
        if (!node.left && !node.right) return 1;

        return this.countNodes(node.left) + this.countNodes(node.right);
    }
}