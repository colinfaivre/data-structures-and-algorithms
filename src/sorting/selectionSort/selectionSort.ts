/*
    Title:
    Selection Sort

    Description:
    It is an in-place comparison sort algorithm.
    The idea is to find the minimal value and place it in the first position
    Then find the second minimum value and place it second, and so on...

    BigO:
    best case    : O(n2) => Linear time
    worst case   : O(n2) => Quadratic time
    average case : O(n2) => Quadratic time

    Spatial complexity: O(1)
    We're operating on the array itself not creating anything else in memory
*/

export function selectionSort(arrayToSort: number[]): number[] {
    let indexMin;
    
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
