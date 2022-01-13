import { insertionSort } from "../src/algorithms/sorting/insertionSort/insertionSort";

test('insertionSort()', () => {
    expect(insertionSort([2, 3, 1])).toEqual([1, 2, 3]);
});