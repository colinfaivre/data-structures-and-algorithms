import { insertionSort } from "../../sorting/insertionSort/insertionSort";"../../sorting/insertionSort"

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