import {Tree} from "./trees/tree";

const myTree1 = new Tree(1);
myTree1.insertChild(2);
myTree1.insertChild(3);
myTree1.removeChild(2);
myTree1.insertChild(4);

console.log(myTree1);

export {insertionSort} from "./sorting/insertionSort/insertionSort"
export {selectionSort} from "./sorting/selectionSort/selectionSort"
export {bubbleSort} from "./sorting/bubbleSort/bubbleSort"
export {mergeSort} from "./sorting/mergeSort/mergeSort"
export {binarySearch} from "./searching/binarySearch/binarySearch"