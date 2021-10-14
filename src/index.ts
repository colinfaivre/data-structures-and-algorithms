import {insertionSort} from "./sorting/insertionSort/insertionSort";

const arrayToSort = new Array(10000).fill(0).map(() => Math.round(Math.random() * 10000))

console.log(insertionSort(arrayToSort));

export {insertionSort} from "./sorting/insertionSort/insertionSort"
export {selectionSort} from "./sorting/selectionSort/selectionSort"
export {bubbleSort} from "./sorting/bubbleSort/bubbleSort"
export {mergeSort} from "./sorting/mergeSort/mergeSort"