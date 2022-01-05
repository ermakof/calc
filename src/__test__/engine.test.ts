import { calcByRpn } from "../app/engine";

describe("calcByRpn", () => {
    it("[2] => 2", () => {
        expect(calcByRpn([2])).toEqual(2);
    });

    it("[2, 3, +] => 5", () => {
        expect(calcByRpn([2, 3, "+"])).toEqual(5);
    });

    it("[1, 2, 3, *, +] => 7", () => {
        expect(calcByRpn([1, 2, 3, "*", "+"])).toEqual(7);
    });
});
