import { parser } from "./parser";

import { calcByRpn } from './engine';

export const runner = (line: string): number => {
  const stack = parser(line);
  return calcByRpn(stack);
};
