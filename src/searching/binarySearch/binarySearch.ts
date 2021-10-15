import { insertionSort } from "../../sorting/insertionSort/insertionSort";

/**
 * Search a number in an array of numbers
 * 
 * @param arrayInWhichSearch 
 * @param valueToSearch 
 * @returns position of the searched number or -1 if it is not found
 * 
 * @example binarySearch(3)
 * 
 */

export function binarySearch(
    arrayInWhichSearch: number[],
    valueToSearch: number
): number {
    // Sort the array first
    const sortedArray = insertionSort(arrayInWhichSearch);
    // Initialize left and right bounds
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        const middleValue = sortedArray[middleIndex];

        if (middleValue < valueToSearch) {
            leftIndex = middleIndex + 1;
        } else if (middleValue > valueToSearch) {
            rightIndex = middleIndex - 1;
        } else {
            return middleIndex
        }
    }

    return -1;
}