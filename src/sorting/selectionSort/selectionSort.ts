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
