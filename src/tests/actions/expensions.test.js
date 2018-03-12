import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expanse axtion', () => {
  const action = removeExpense( {id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action', () => {
  const action = editExpense('123abc', {notes: 'Some notes'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    expense: {
      notes: 'Some notes'
    }
  });
});