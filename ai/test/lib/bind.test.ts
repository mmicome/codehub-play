import '@lib/bind';

function sum(num1:number, num2:number):number {
    return num1 + num2;
}

describe('apply', () => { 
    test("apply", () => {
        expect(sum.bind('abc', 10)(20)).toBe(30)
    })
 })
