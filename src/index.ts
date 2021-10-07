import {insertionSort} from "./sorting/insertionSort";

// const arrayToSort = [0, 3, 14, 3, 5, 45, 100, 0, 3, 2, 4, 32, 76];
const arrayToSort = new Array(10000).fill(0).map(() => Math.round(Math.random() * 10000))

console.log(insertionSort(arrayToSort));