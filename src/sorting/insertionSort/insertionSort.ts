/**
 * Insertion Sort
 * 
 * It builds the final array one value at a time
 * It assumes that the first element is already sorted
 * Then a comparison with the second value is performed
 * Should the second value stay in its place or be inserted before the first value ?
 * 
 * Big O : O(n2)
 * Spatial complexity : O(1)
 * 
 * @param arrayToSort 
 * @returns sorted array
 */

export function insertionSort(arrayToSort: number[]): number[] {
    for (let i = 1; i < arrayToSort.length; i++) {
        const numberToInsert = arrayToSort[i];
        let j: number;

        for (j = i - 1; arrayToSort[j] > numberToInsert && j >= 0; j--) {
            arrayToSort[j + 1] = arrayToSort[j];
        }

        arrayToSort[j + 1] = numberToInsert;
    }
    
    return arrayToSort;
}
