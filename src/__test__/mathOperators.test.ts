import { mul, div, add, minus, fact, pow } from "../app/mathOperators";

describe("mathOperators test cases", () => {
    describe("multiply", () => {
        it("mul 1 * 2 to equal 2", () => {
            expect(mul(1, 2)).toBe(2);
        });

        it("mul 2 * 2 to equal 4", () => {
            expect(mul(2, 2)).toBe(4);
        });
    });

    describe("divide", () => {
        it("div 2 / 2 to equal 1", () => {
            expect(div(2, 2)).toBe(1);
        });

        it("div 4 / 2 to equal 2", () => {
            expect(div(4, 2)).toBe(2);
        });
    });

    it("add 4 + 2 to equal 6", () => {
        expect(add(4, 2)).toBe(6);
    });

    it("minus 4 - 2 to equal 2", () => {
        expect(minus(4, 2)).toBe(2);
    });

    describe("exponentiation", () => {
        it("pow 2 ** 3 to equal 8", () => {
            expect(pow(2, 3)).toBe(8);
        });

        it("pow 3 ** 2 to equal 9", () => {
            expect(pow(3, 2)).toBe(9);
        });
    });

    describe("factorial", () => {
        it("0 ! to equal 1", () => {
            expect(fact(0)).toBe(1);
        });

        it("1 ! to equal 1", () => {
            expect(fact(1)).toBe(1);
        });

        it("3 ! to equal 6", () => {
            expect(fact(3)).toBe(6);
        });
    });
});
