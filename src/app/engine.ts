import { ParsedLineType } from "./parser";
import { isNumber, isUnaryOperator, isBinaryOperator } from "./helpers";
import { unaryMathOperators, binaryMathOperators } from "./mathOperators";

export const calcByRpn = (rpnStack: ParsedLineType): number => {
  const stack: number[] = [];
  rpnStack.forEach((item) => {
    if (isNumber(String(item))) {
      stack.push(Number(item));
      return;
    }

    if (isBinaryOperator(String(item))) {
      if (stack.length < 2) {
        throw `Error: ${rpnStack} => no enough operands for operation ${item}`;
      }
      const second = Number(stack.pop());
      const first = Number(stack.pop());
      const result: number = binaryMathOperators[item](first, second);
      stack.push(result);
    }

    if (isUnaryOperator(String(item))) {
      if (stack.length < 1) {
        throw `Error: ${rpnStack} => no enough operands for operation ${item}`;
      }
      const first = Number(stack.pop());
      const result: number = unaryMathOperators[item](Number(first));
      stack.push(result);
    }
  });

  if (stack.length === 1) {
    return Number(stack.pop());
  }

  throw `Error: ${rpnStack} => ${stack}`;
};
