import { escapeStringRegexp } from '@utils/regexp';

describe("regexp module", () => {
    test("escapeStringRegexp: as|df/d|\\f", () => {
        const reg = new RegExp(escapeStringRegexp("as|df/d|\\f"));
        expect(reg.test("as|df/d|\\f")).toBe(true);
    });
    test("escapeStringRegexp: asdf{}()[]f", () => {
        const reg = new RegExp(escapeStringRegexp("asdf{}()[]f"));
        expect(reg.test("asdf{}()[]f")).toBe(true);
    })
    test("escapeStringRegexp: as-sd", () => {
        const reg = new RegExp(escapeStringRegexp("as-sd"));
        expect(reg.test("as-sd")).toBe(true);
    })
    test("escapeStringRegexp: as$+*?^.", () => {
        const reg = new RegExp(escapeStringRegexp("as$+*?^."));
        expect(reg.test("as$+*?^.")).toBe(true);
    })
})