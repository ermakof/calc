import { runner } from "../app/runner";

describe("Runner", () => {
    describe("Simple cases", () => {
        it("1-1", () => {
            expect(runner("1-1")).toEqual(0);
        });

        it("1 * 32", () => {
            expect(runner("1 * 32")).toEqual(32);
        });

        it("2*32", () => {
            expect(runner("2 * 32")).toEqual(64);
        });

        it("2 +    32", () => {
            expect(runner("2 + 32")).toEqual(34);
        });
    });

    describe("Tripled/mixed cases", () => {
        it("2* 2 *3", () => {
            expect(runner("2* 2 *3")).toEqual(12);
        });

        it("2*2 + 3", () => {
            expect(runner("2*2 + 3")).toEqual(7);
        });

        it(" 2 +   2*  3 ", () => {
            expect(runner(" 2 +   2*  3 ")).toEqual(8);
        });
    });

    describe("Long cases", () => {
        it("20 +1 * 10- 5 *  3", () => {
            expect(runner("20 +1 * 10- 5 *  3")).toEqual(15);
        });

        it("20 - 10 *10/ 5 - 3", () => {
            expect(runner("20 - 10 *10/ 5 - 3")).toEqual(-3);
        });
    });

    describe("With round brackets", () => {
        it("(1)", () => {
            expect(runner("(1)")).toEqual(1);
        });

        it("((1))", () => {
            expect(runner("((1))")).toEqual(1);
        });

        it(" (1 +1 ) + ( 10- 9) *  3", () => {
            expect(runner(" (1 +1 ) + ( 10- 9) *  3")).toEqual(5);
        });

        it("(3 - 1) *(4/ 2) - 5", () => {
            expect(runner("(3 - 1) *(4/ 2) - 5")).toEqual(-1);
        });

        it("(3 - 1) *((4/ 2) - 5)", () => {
            expect(runner("(3 - 1) *( (4/ 2) - 5)")).toEqual(-6);
        });
    });

    describe("With pow", () => {
        it("3^2", () => {
            expect(runner("3^2")).toEqual(9);
        });

        it(" (1 +1 )^2", () => {
            expect(runner(" (1 +1 )^3")).toEqual(8);
        });

        it("(2 - 1) *(4/ 2) - 3", () => {
            expect(runner("(2 - 1)^2 -(4/ 2) ^2 - 3^2")).toEqual(-12);
        });
    });

    describe("With factorial", () => {
        it("3!", () => {
            expect(runner("3!")).toEqual(6);
        });

        it("3!+4", () => {
            expect(runner("3!+4")).toEqual(10);
        });

        it("3!+4*2", () => {
            expect(runner("3!+4*2")).toEqual(14);
        });

        it("(3! +4)*2", () => {
            expect(runner("(3! +4)*2")).toEqual(20);
        });

        it("(3!+2^ 2)*2", () => {
            expect(runner("(3!+2^ 2)*2")).toEqual(20);
        });
    });
});
