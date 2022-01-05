import { mathOperators } from './mathOperators';
import type { MathOperator } from './mathOperators';
import { unaryMathOperators, binaryMathOperators } from "./mathOperators";

export const isOperator = (item: string | number): item is MathOperator =>
  item in mathOperators;

export const isNumber = (item = ''): boolean => !!item && !isNaN(Number(item));

export const isUnaryOperator = (op = ''): boolean => unaryMathOperators.hasOwnProperty(op);

export const isBinaryOperator = (op = ''): boolean => binaryMathOperators.hasOwnProperty(op);
