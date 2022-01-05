import { isBinaryOperator, isNumber, isUnaryOperator } from './helpers';
import { scalarOperators } from './mathOperators';

export type ParsedLineType = (number | string)[];

const weights: { [key: string]: number } = {
  "!": 3,
  "*": 2,
  "/": 2,
  "^": 2,
  "+": 1,
  "-": 1,
};

const getWeight = (operator: string): number => weights[operator] ? weights[operator] : 0;

const isFirstSignHasMaxWeight = (s1 = '', s2 = ''): boolean => getWeight(s1) >= getWeight(s2);

const validateParentheses = (line = '') => {
  const countLeftParenthesis = (line.match(/[(/]/gi)||[]).length;
  const countRightParenthesis = (line.match(/[)/]/gi)||[]).length;
  if (countLeftParenthesis > countRightParenthesis) {
    throw new TypeError(`Error: Not enough right parentheses => ${line}`)
  }
  if (countLeftParenthesis < countRightParenthesis) {
    throw new TypeError(`Error: Not enough left parentheses => ${line}`)
  }
}

const convertLineToStack = (line = '') => Object.keys(scalarOperators).concat('(').concat(')')
  .reduce((acc, curr) =>
      acc.replaceAll(curr, ` ${curr} `),
    line.replace(/\s/gi, '')
  )
  .split(' ')
  .filter(item => !!item)

export const parser = (line: string): ParsedLineType => {
  validateParentheses(line);

  const directStack = convertLineToStack(line);

  const stack: string[] = [];
  return directStack.reduce<ParsedLineType>((accum, curr, key) => {
    if (isNumber(curr)) {
      accum.push(Number(curr));
    }

    if (isUnaryOperator(curr) || isBinaryOperator(curr)) {
      while (stack.length > 0) {
        const stackTop: string = stack[stack.length - 1];
        if (isFirstSignHasMaxWeight(stackTop, curr)) {
          accum.push(String(stack.pop()));
        } else {
          break;
        }
      }

      stack.push(curr);
    }

    if (curr === "(") {
      stack.push(curr);
    }

    if (curr === ")") {
      while (stack.length > 0) {
        const stackTop: string = stack[stack.length - 1];
        if (stackTop === "(") {
          stack.pop();
          break;
        } else {
          accum.push(String(stack.pop()));
        }
      }
    }

    if (key === directStack.length - 1) {
      stack.reverse().forEach((item2) => {
        accum.push(String(item2));
      });
    }
    return accum;
  }, []);
};
