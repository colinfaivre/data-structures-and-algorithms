export class Stack {
    _storage: { [key: number]: number };
    _length: number;
    
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    /**
     * Add a value on the top of the stack
     * @param value: number
     */
    push(value: number): void {
        this._storage[this._length] = value;
        this._length++;
    }

    /**
     * Remove the last value from the top of the stack
     */
    pop(): number {
        if (this._length <= 0) return undefined;

        const poppedValue = this.peek();
        delete this._storage[this._length - 1];
        this._length--;

        return poppedValue;
    }

    /**
     * Returns the value at the end of the stack without removing it
     * @returns the last and newest value in the stack
     */
    peek(): number {
        if (this._length <= 0) return undefined;
        
        return this._storage[this._length - 1];
    }
}