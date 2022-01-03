export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryScalarOperationType = (first: number) => number;
export type FunctionOperationType = (value: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow: ScalarOperationType = (first, second) =>
  Math.pow(first, second);

export const factorial: FunctionOperationType = (first) =>
  first ? first * factorial(first - 1) : 1;

export type ScalarOperator = "*" | "/" | "+" | "-" | "^" | "!";

export const scalarOperators: {
  [key in ScalarOperator]: ScalarOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
};
export type MathOperator = ScalarOperator;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};

export const binaryMathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const sqr: UnaryScalarOperationType = (first) => first * first;

export const fact: UnaryScalarOperationType = (first) => {
  let result = 1;
  for (let i = 1; i <= first; i++) {
    result *= i;
  }
  return result;
};

export const unaryMathOperators: { [key: string]: UnaryScalarOperationType } = {
  "**": sqr,
  "!": fact,
};

const [zero, first] = mathPriorities;

export const MathPrioritiesList = {
  zero,
  first,
};
