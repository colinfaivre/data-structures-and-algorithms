import { factorialWithLoop, factorialWithRecursion } from "../src/recursion/factorial";

test('factorialWithLoop()', () => {
    expect(factorialWithLoop(3)).toEqual(6);
    expect(factorialWithLoop(4)).toEqual(24);
    expect(factorialWithLoop(5)).toEqual(120);
});

test('factorialWithRecursion()', () => {
    expect(factorialWithRecursion(5)).toEqual(120);
})