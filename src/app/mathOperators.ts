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

export type ScalarOperator = "*" | "/" | "+" | "-" | "^" | "!";

export const pow: ScalarOperationType = (base, exp) => base ** exp;

export const fact: UnaryScalarOperationType = (val = 1) =>
  val ? [...Array(val).keys()].reduce((acc, curr) => acc * (curr + 1), 1) : 1;

export const scalarOperators: {
  [key in ScalarOperator]: ScalarOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": fact,
};
export type MathOperator = ScalarOperator;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const binaryMathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const unaryMathOperators: { [key: string]: UnaryScalarOperationType } = {
  "!": fact,
};
