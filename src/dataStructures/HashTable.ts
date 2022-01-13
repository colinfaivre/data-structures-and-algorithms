

export default class HashTable {
    _storage: [][] | [string, number][];
    _tableSize: number;
    
    constructor(size: number) {
        this._storage = [];
        this._tableSize = size;
    }

    /**
     * O(1)
     * Inserts a new key-value pair
     * @param key - the key associated with the value
     * @param value - the value to insert
     */
    insert(key: string, value: number) {
        const index = this._hash(key, this._tableSize);

        if (!this._storage[index]) {
            this._storage[index] = [];
        }

        this._storage[index].push([key, value]);
    }

    /**
     * O(1)
     * Deletes a key-value pair
     * @param key: string - the key associated with the value
     * @return value - the deleted value
     */
    remove(key: string): string {
        return key;
    }

    /**
     * Returns the value associated with a key
     * @param key: string - the key to search for
     * @returns value - the value associated with the key
     */
    retrieve(key: string): string {
        const index = this._hash(key, this._tableSize);

        if (this._storage[index]) {
            
        }
    }

    /**
     * Hashes string value into an integer that can be mapped to an array index
     * @param str: string - the string to be hashed 
     * @param n: number - the size of the storage array
     * @returns hash: number - an integer between 0 and n
     */
    _hash(str: string, n: number) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }

        return sum % n;
    }
}