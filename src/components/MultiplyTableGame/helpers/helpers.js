import { getNaturalNumbers } from "../../../helpers/common";

export const getFromLocalStorage = (key, defaultValue) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
};

export const getMultiplierArray = (
  includingMultiplicationByOne,
  includingMultiplicationByTen
) => {
  const from = includingMultiplicationByOne ? 1 : 2;
  const to = includingMultiplicationByTen ? 10 : 9;
  return getNaturalNumbers(from, to);
};
