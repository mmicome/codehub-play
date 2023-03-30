import { isPalindrome } from '@ai/isPalindrome';

describe("isPalindrome", () => {
    test("123454321", () => {
        expect(isPalindrome(123454321)).toBe(true);
    })
})