import { checkMathOperatorsPriorities } from "../app/helpers";
import { MathPrioritiesList } from "../app/mathOperators";

describe("Helpers", () => {
  describe("checkMathOperatorsPriorities", () => {
    it("checkMathOperatorsPriorities detect priority zero false case", () => {
      expect(checkMathOperatorsPriorities("+", MathPrioritiesList.zero)).toBe(
        false
      );
    });
  });
});
