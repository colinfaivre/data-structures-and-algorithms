import { Queue } from "./queue/Queue";
const myQueue = new Queue();
myQueue.enqueue(456);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(10);
console.log(myQueue)
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue)
console.log(myQueue.peek())
myQueue.enqueue(42);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek())


export {insertionSort} from "./sorting/insertionSort/insertionSort"
export {selectionSort} from "./sorting/selectionSort/selectionSort"
export {bubbleSort} from "./sorting/bubbleSort/bubbleSort"
export {mergeSort} from "./sorting/mergeSort/mergeSort"
export {binarySearch} from "./searching/binarySearch/binarySearch"