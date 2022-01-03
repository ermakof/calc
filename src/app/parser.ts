import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line = ''): ParsedLineType | null => {
  const stack = Object.keys(mathOperators)
    .reduce((acc, curr) =>
        acc.replaceAll(curr, ` ${curr} `),
        line.replace(/\s/gi, '')
    )
    .split(' ')
    .filter(item => !!item);

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
