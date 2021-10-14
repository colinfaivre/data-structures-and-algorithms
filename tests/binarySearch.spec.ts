import { binarySearch } from "../src/searching/binarySearch/binarySearch";

test('binarySearch()', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)).toEqual(8);
});