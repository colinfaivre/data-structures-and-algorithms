/*
    Title:
    Bubble Sort

    Description:
    Typical first one to do because it matches the human mental model of sorting
    Compare to items next to each other in an array and swap them if necessary

    BigO:
    best case    : O(n2) => Linear time
    worst case   : O(n2) => Quadratic time
    average case : O(n2) => Quadratic time

    Spatial complexity: O(1)
    We're operating on the array itself not creating anything else in memory
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

/*
    Title:
    Improved Bubble Sort

    Description:
    This one is similar to the bubble sort algorithm
    but we subtract the number of passes from the inner loop
    to avoid all the ending useless comparisons

    BigO:
    best case    : O(n2) => Linear time
    worst case   : O(n2) => Quadratic time
    average case : O(n2) => Quadratic time

    Spatial complexity: O(1)
    We're operating on the array itself not creating anything else in memory
*/

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