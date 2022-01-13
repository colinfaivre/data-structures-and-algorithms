import { mergeSort } from '../src/algorithms/sorting/mergeSort/mergeSort';

test('mergeSort()', () => {
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
});