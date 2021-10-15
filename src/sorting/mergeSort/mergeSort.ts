/**
 * Merge Sort
 * 
 * This is a divide and conquer algorithm.
 * The idea behind is to divide the original aray into smaller arrays until each small array has only one position,
 * and then merge these smaller arrays into bigger ones until we have a single big aray at the end that is sorted.
 * Mozilla Firefox uses merge sort for the Array.prototype.sort method but Chrome uses a variation of the quick sort algorithm
 * 
 * BigO : O(nlogn)
 * 
 * @param arrayToSort 
 * @returns sorted array
 */

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
    const result: number[] = [];

    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
