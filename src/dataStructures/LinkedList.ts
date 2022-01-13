interface INode {
    value: number;
    next: INode;
}

export default class LinkedList {
    head: INode;
    tail: INode;
    
    constructor(value: number) {
        this.head = { value, next: null};
        this.tail = this.head;
    }

    /**
     * Insert a new value to the end of the linked list
     * @param value - the value to insert
     */
    insert(value: number) {
        // update tail
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * Deletes a node
     * @param node - the node to remove
     * @returns value - the deleted node's value
     */
    remove(node: INode) {
        let currentNode = this.head;
        while (currentNode.next !== node) {
            currentNode = currentNode.next;
        }
        // currentNode.next === node
        if (currentNode.next.next) {
            currentNode.next = currentNode.next.next
        } else if (currentNode.next){
            currentNode.next = null;
            this.tail = currentNode;
        }
        
        return node.value;
    }

    /**
     * Removes the value at the end of the linked list
     * @returns undefined
     */
     removeTail(): void {
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    /**
     * Searches the linked list and returns true if it contains the value passed
     * @param value - the value to search for
     * @returns boolean - true if value is found, otherwise false
     */
    contains(value): boolean {
        let currentNode = this.head;
        while (currentNode.value !== value && currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode.value === value;
    }

    /**
     * Checks if a node is the head of the linked list
     * @param node - the node to check
     * @returns boolean - true if node is the head, otherwise false
     */
    isHead(node): boolean {
        return node === this.head;
    }

    /**
    * Checks if a node is the tail of the linked list
    * @param node - the node to check
    * @returns boolean - true if node is the tail, otherwise false
    */
    isTail(node): boolean {
        return node === this.tail;
    }
}