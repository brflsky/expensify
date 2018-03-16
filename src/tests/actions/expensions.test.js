import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import db from '../../firebase/firebase';
import { expenses } from '../fixtures';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach((expense) => {
    const { id, description, amount, createdAt, notes } = expense;
    const newExpense = { description, amount, createdAt, notes };
    expensesData[id] = newExpense;
  });
  db.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expanse axtion', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action', () => {
  const action = editExpense('123abc', { notes: 'Some notes' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    expense: {
      notes: 'Some notes'
    }
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Test expense 1',
    amount: 105,
    notes: 'test notes',
    createdAt: 4323424
  };

  // store.dispatch(startAddExpense(expenseData)).then(() => {
  //   const actions = store.getActions();
  //   expect(actions[0]).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       id: expect.any(String),
  //       ...expenseData
  //     }
  //   });
  //   db.ref(`expenses/${actions[0].expense.id}`).once('value')
  //     .then((snapshot) => {
  //       expect(snapshot.val()).toEqual(expenseData);
  //       done();
  //     });
  // });
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should genereate SET_EXSPENSES action', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    expect(store.getActions()[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
