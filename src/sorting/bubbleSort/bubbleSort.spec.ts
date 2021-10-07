import { bubbleSort } from "./bubbleSort";

test('bubbleSort()', () => {
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
});