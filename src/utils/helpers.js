export const tipCalculator = (totalMoney, tipPercent, numOfPeople) =>
  (numOfPeople !== 0 && typeof numOfPeople === 'number'
    ? (totalMoney / numOfPeople) * (tipPercent / 100)
    : 0
  ).toFixed(2);

export const totalCalculator = (totalMoney, tipPercent, numOfPeople) =>
  (numOfPeople !== 0 && typeof numOfPeople === 'number'
    ? Number(totalMoney / numOfPeople) +
      Number(tipCalculator(totalMoney, tipPercent, numOfPeople))
    : 0
  ).toFixed(2);
