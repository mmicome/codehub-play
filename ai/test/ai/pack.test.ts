import { pack } from '@ai/pack';

describe("pack", () => {
    test("pack", () => {
        const weight = [2, 1, 5, 4, 3, 6]
        const value = [10, 4, 7, 1, 5, 15]
        expect(pack(6, value, weight)).toBe(19)
    })
});