/**
 * Sort an array of numbers in ascending order
 * 
 * Typical first one to do because it matches the human mental model of sorting
 * compare two items next to each other in an array and swap them if necessary
 * 
 * Time Complexity : O(n2) - Quadratic
 * Spatial Complexity : O(1)
 * 
 * @param arrayToSort - array to be sorted
 * @returns a sorted array
 * 
 */

export function bubbleSort(arrayToSort: number[]): number[] {
    for (let i = 0; i <= arrayToSort.length; i++) {
        for (let j = 0; j <= arrayToSort.length; j++) {
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                const temporary = arrayToSort[j + 1];
                arrayToSort[j + 1] = arrayToSort[j];
                arrayToSort[j] = temporary;
            }
        }
    }
    
    return arrayToSort;
}

export function improvedBubbleSort(arrayToSort: number[]): number[] {
    for (let i = 0; i < arrayToSort.length; i++) {
        for (let j = 0; j < arrayToSort.length -1 - i; j++) {
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                const temporary = arrayToSort[j + 1];
                arrayToSort[j + 1] = arrayToSort[j];
                arrayToSort[j] = temporary;
            }
        }
    }
    
    return arrayToSort;
}