export const getNaturalNumbers = (from = 1, to = 10) => {
  const firstNumber = Number(from);
  const lastNumber = Number(to);
  return new Array(lastNumber - firstNumber + 1)
    .fill(0)
    .map((item, index) => index + firstNumber);
};
