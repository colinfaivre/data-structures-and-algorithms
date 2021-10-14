import {insertionSort} from "./sorting/insertionSort/insertionSort";

const arrayToSort = new Array(10000).fill(0).map(() => Math.round(Math.random() * 10000))

console.log(insertionSort(arrayToSort));