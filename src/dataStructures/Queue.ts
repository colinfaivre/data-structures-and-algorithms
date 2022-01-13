export class Queue {
    _storage: { [key: number]: number };
    _length: number;
    _headIndex: number;
    
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    /**
     * Enqueues a new value at the end of the queue
     * @param value: number => value to enqueue
     */
    enqueue(value: number): void {
        this._storage[this._length + this._headIndex] = value;
        this._length++;
    }

    /**
     * Dequeues the value from the beginning
     * @returns the dequeued head
     */
    dequeue(): number {
        if (this._length <= 0) return undefined;

        const head = this._storage[this._headIndex];
        delete this._storage[this._headIndex];
        this._length--;
        this._headIndex++;

        return head;
    }

    /**
     * Returns the value at the beginning of the Queue
     * @returns the first and the latest value
     */
    peek(): number {
        return this._storage[this._headIndex];
    }
}