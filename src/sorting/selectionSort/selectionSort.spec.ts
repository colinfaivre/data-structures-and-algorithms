import { selectionSort } from "./selectionSort";

test('selectionSort()', () => {
    expect(selectionSort([2, 3, 1])).toEqual([1, 2, 3]);
});