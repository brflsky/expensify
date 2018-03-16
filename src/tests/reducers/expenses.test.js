import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures';

test('should modify expense object', () => {

  const newExpenses = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    expense: {
      id: '1',
      description: 'Car Rental for April',
      notes: '',
      amount: 43500,
      createdAt: -432000000
    },
    id: '1'
  });
  expect(newExpenses).toEqual([
    {
      id: '0',
      description: 'Gum',
      notes: '',
      amount: 199,
      createdAt: 0
    },
    {
      id: '1',
      description: 'Car Rental for April',
      notes: '',
      amount: 43500,
      createdAt: -432000000
    },
    {
      id: '2',
      description: 'Wine',
      notes: '',
      amount: 199,
      createdAt: moment(0).add(5, 'day').valueOf()
    }
  ]);
});

test('should set expenses when state is empty', () => {
  const newExpenses = expensesReducer([], {
    type: 'SET_EXPENSES',
    expenses
  });
  expect(newExpenses).toEqual(expenses);
});

test('should set expenses', () => {
  const newExpenses = expensesReducer([{
    id: '0',
    description: 'Gum',
    notes: '',
    amount: 199,
    createdAt: 0
  },
  {
    id: '1',
    description: 'Car Rental for April',
    notes: '',
    amount: 43500,
    createdAt: -432000000
  }], {
    type: 'SET_EXPENSES',
    expenses
  });
  expect(newExpenses).toEqual(expenses);
});
