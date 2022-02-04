import { AVLTree } from "../src/dataStructures/AVLTree";

test('AVLTree', () => {
    const tree = new AVLTree();
    tree.insert(7);
    tree.insert(2);
    tree.insert(9);
    tree.insert(5);
    tree.insert(8);
    tree.insert(1);
    tree.insert(4);
    tree.insert(3);
    tree.insert(-1);
    tree.insert(-2);
    tree.insert(-3);

    tree.inOrderTraverse(console.log)

    expect(tree.height).toBe(5);
    expect(tree.min().value).toBe(-3);
    expect(tree.max().value).toBe(9);
});