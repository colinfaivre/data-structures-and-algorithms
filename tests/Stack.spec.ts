import { Stack } from "../src/dataStructures/Stack";

test('Stack()', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
});