type ITree = {
    value: number;
    children: ITree[];
};

export class Tree {
    value: number;
    children: ITree[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }

    insertChild(value: number) {
        const newTree = new Tree(value);
        this.children.push(newTree);

        return newTree;
    }

    removeChild(value: number) {
        this.children = this.children.filter((item) => item.value !== value);
    }
}