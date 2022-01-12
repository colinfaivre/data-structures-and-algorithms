import { BinaryTree } from "./trees/tree";
const myBinaryTree = new BinaryTree(4);
console.log(myBinaryTree);
myBinaryTree.traverse(console.log);
console.log(myBinaryTree.contains(3));
console.log(myBinaryTree.contains(4));

export {insertionSort} from "./sorting/insertionSort/insertionSort"
export {selectionSort} from "./sorting/selectionSort/selectionSort"
export {bubbleSort} from "./sorting/bubbleSort/bubbleSort"
export {mergeSort} from "./sorting/mergeSort/mergeSort"
export {binarySearch} from "./searching/binarySearch/binarySearch"