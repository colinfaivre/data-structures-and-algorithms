/**
 * Selection Sort
 * 
 * It is an in-place comparison sort algorithm.
 * The idea is to find the minimal value and place it in the first position
 * Then find the second minimum value and place it second, and so on...
 * 
 * BigO : O(n2)
 * Space Complexity : O(1)
 * 
 * @param arrayToSort 
 * @returns sorted array
 */

export function selectionSort(arrayToSort: number[]): number[] {
    let indexMin: number;
    
    for (let i = 0; i < arrayToSort.length - 1; i++) {
        indexMin = i;

        for (let j = i; j < arrayToSort.length; j++) {
            if (arrayToSort[indexMin] > arrayToSort[j]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            const temporary = arrayToSort[i];
            arrayToSort[i] = arrayToSort[indexMin];
            arrayToSort[indexMin] = temporary;
        }
    }
    
    return arrayToSort;
}
