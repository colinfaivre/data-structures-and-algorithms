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
