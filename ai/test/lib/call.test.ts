import '@lib/call';

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

describe('call', () => { 
    test("call", () => {
        expect(sum.call('abc', 10, 20)).toBe(30)
    })
 })