import { parser } from "../app/parser";

describe("Parser", () => {
    it('1+32 => [1, 32, "+"]', () => {
        expect(parser("1+32")).toEqual([1, 32, "+"]);
    });

    it('1 + 32 => [1, 32, "+"]', () => {
        expect(parser("1 + 32")).toEqual([1, 32, "+"]);
    });

    it('11+3*22 => [11, 3, 22, "*", "+"]', () => {
        expect(parser("11+3*22")).toEqual([11, 3, 22, "*", "+"]);
    });

    it('11 + 3 * 22 => [11, 3, 22, "*", "+"]', () => {
        expect(parser("11 + 3 * 22")).toEqual([11, 3, 22, "*", "+"]);
    });

    it('1+32-2+5 => [1, 32, "+", 2, "-", 5, "+"]', () => {
        expect(parser("1+32-2+5")).toEqual([1, 32, "+", 2, "-", 5, "+"]);
    });

    it('1 + 32 - 2 + 5 => [1, 32, "+", 2, "-", 5, "+"]', () => {
        expect(parser("1 + 32 - 2 + 5")).toEqual([1, 32, "+", 2, "-", 5, "+"]);
    });

    it(' 1  +   32- 2     +5 => [1, 32, "+", 2, "-", 5, "+"]', () => {
        expect(parser("1 + 32 - 2 + 5")).toEqual([1, 32, "+", 2, "-", 5, "+"]);
    });

    it('2^ => [2, "^"]', () => {
        expect(parser("2^")).toEqual([2, "^"]);
    });

    it('2 ^ => [2, "^"]', () => {
        expect(parser("2 ^")).toEqual([2, "^"]);
    });

    it('( 3 ) => [3]', () => {
        expect(parser("( 3 )")).toEqual([3]);
    });

    it('(3) => [3]', () => {
        expect(parser("(3)")).toEqual([3]);
    });

    it('( 2 + 3 ) => [2, 3, "+"]', () => {
        expect(parser("( 2 + 3 )")).toEqual([2, 3, "+"]);
    });

    it('(2+3) => [2, 3, "+"]', () => {
        expect(parser("(2+3)")).toEqual([2, 3, "+"]);
    });

    it('(2)*5 => [2, 5, "*"]', () => {
        expect(parser("(2)*5")).toEqual([2, 5, "*"]);
    });

    it('5*(2) => [5, 2, "*"]', () => {
        expect(parser("5*(2)")).toEqual([5, 2, "*"]);
    });

    it('5*(2+1) => [5, 2, 1, "+", "*"]', () => {
        expect(parser("5*(2+1)")).toEqual([5, 2, 1, "+", "*"]);
    });
});

describe("Parser invalid cases", () => {
    it('(1 => Unexpected string', () => {
        expect(() => parser("(1")).toThrow(
          TypeError("Error: Not enough right parentheses => (1")
        );
    });

    it('(1)) => Unexpected string', () => {
        expect(() => parser("(1))")).toThrow(
          TypeError("Error: Not enough left parentheses => (1))")
        );
    });
});
