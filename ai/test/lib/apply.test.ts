import '@lib/apply';

function sum(num1:number, num2:number):number {
    return num1 + num2;
}

describe('apply', () => { 
    test("apply", () => {
        expect(sum.apply('abc', [10, 20])).toBe(30)
    })
 })
