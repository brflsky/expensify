import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import db from '../../firebase/firebase';
import { expenses } from '../fixtures';

const uid = 'testid';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach((expense) => {
    const { id, description, amount, createdAt, notes } = expense;
    const newExpense = { description, amount, createdAt, notes };
    expensesData[id] = newExpense;
  });
  db.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
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
  const store = createMockStore({ auth: { uid } });
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
    return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
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
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startSetExpenses()).then(() => {
    expect(store.getActions()[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should remove expense from db', (done) => {
  db.ref(`users/${uid}/expenses/1`).remove().then(() => db.ref(`users/${uid}/expenses/1`).once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
    }));
});

test('should remove expense from db dispatching actions', (done) => {
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startRemoveExpense(expenses[1])).then(() => db.ref(`users/${uid}/expenses/${expenses[1].id}`).once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
    }));
});

test('should dispatch editExpense action and update DB', (done) => {
  const store = createMockStore({ auth: { uid } });
  expenses[1].notes = 'new test notes';
  store.dispatch(startEditExpense(expenses[1].id, expenses[1]))
    .then(() => {
      expect(store.getActions()[0]).toEqual({
        type: 'EDIT_EXPENSE',
        expense: expenses[1],
        id: expenses[1].id
      });
    }).then(() => { // how this could work?
      db.ref(`users/${uid}/expenses/${expenses[1].id}`).once('value')
        .then((snapshot) => {
          expect(snapshot.val()).toEqual(expenses[1]);
          done();
        });
    });
});
//  test('should dispatch editExpense action and update DB', (done) => {
//  const store = createMockStore(expenses);
//   expenses[1].notes = 'dupa nie robi rózńicy';
//   store.dispatch(startEditExpense(expenses[1].id, expenses[1]))
//     .then(() => {
//       expect(store.getActions()[0]).toEqual({
//         type: 'EDIT_EXPENSE',
//         expense: expenses[1],
//         id: expenses[1].id
//       });
//       return db.ref(`expenses/${expenses[1].id}`).once('value');
//     }).then((snapshot) => {
//       expect(snapshot.val()).toEqual(expenses[1]);
//       done();
//     });
// });


// test('should update expense in db', (done) => {
//   const store = createMockStore(expenses);
// });
