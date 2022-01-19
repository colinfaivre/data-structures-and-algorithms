export function factorialWithLoop(num: number): number {
    let result = 1; 
    for (let i = 2; i <= num; i++) {
        result *= i;    
    }
    
    return result;
}

export function factorialWithRecursion(num: number): number {
    if (num === 1) return 1;
    else return num * factorialWithRecursion(num - 1);
}