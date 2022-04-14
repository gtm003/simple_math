import { getNaturalNumbers } from "../helpers/common";

export const defaultSettings = {
  numbers: getNaturalNumbers().map((number) => ({
    name: number,
    checked: number !== 1 && number !== 10,
  })),
  firstMultiplier: 2,
  lastMultiplier: 9,
};

export const colors = {
  1: "#e1bee7",
  2: "#ef5350",
  3: "#ffb74d",
  4: "#d4e157",
  5: "#9ccc65",
  6: "#69f0ae",
  7: "#40c4ff",
  8: "#3d5afe",
  9: "#7e57c2",
  10: "#e1bee7",
};