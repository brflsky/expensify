import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 for empty expenses array', () => {
  const expenses = [];
  const total = getExpensesTotal(expenses);
  expect(total).toBe(0);
});

test('should return 15 for 2 expenses array', () => {
  const expenses = [
    { amount: 15 }
  ];
  const total = getExpensesTotal(expenses);
  expect(total).toBe(15);
});
test('should return 25 for 2 expenses array', () => {
  const expenses = [
    { amount: 10 }, { amount: 15 }
  ];
  const total = getExpensesTotal(expenses);
  expect(total).toBe(25);
});
