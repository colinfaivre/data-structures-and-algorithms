import { selectionSort } from "../src/sorting/selectionSort/selectionSort";

test('selectionSort()', () => {
    expect(selectionSort([2, 3, 1])).toEqual([1, 2, 3]);
});