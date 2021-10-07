export function mergeSort(arrayToSort: number[]): number[] {
    if (arrayToSort.length > 1) {
        const { length } = arrayToSort;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arrayToSort.slice(0, middle));
        const right = mergeSort(arrayToSort.slice(middle, length));
        arrayToSort = merge(left, right);
    }
    
    return arrayToSort;
}

function merge(left: number[], right: number[]): number[] {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
