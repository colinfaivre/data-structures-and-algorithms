import { Queue } from "../src/dataStructures/Queue";

test('Queue()', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.dequeue()
    expect(queue.peek()).toBe(2);
});