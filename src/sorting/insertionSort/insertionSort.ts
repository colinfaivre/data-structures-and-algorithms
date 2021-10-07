/*
    Title:
    Insertion Sort

    Description:
    It builds the final array one value at a time
    It assumes that the first element is already sorted
    Then a comparison with the second value is performed
    Should the second value stay in its place or be inserted before the first value ?

    BigO:
    best case    : O(n2) => Linear time
    worst case   : O(n2) => Quadratic time
    average case : O(n2) => Quadratic time

    Spatial complexity: O(1)
    We're operating on the array itself not creating anything else in memory
*/

export function insertionSort(arrayToSort: number[]): number[] {
    for (let i = 1; i < arrayToSort.length; i++) {
        let numberToInsert = arrayToSort[i];
        let j;

        for (j = i - 1; arrayToSort[j] > numberToInsert && j >= 0; j--) {
            arrayToSort[j + 1] = arrayToSort[j];
        }

        arrayToSort[j + 1] = numberToInsert;
    }
    
    return arrayToSort;
}
