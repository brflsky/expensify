import uuid from 'uuid';
import db from '../firebase/firebase';

//ADD EXPENSE

export const addExpense = (expense = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).push(expenseData)
      .then((snapshot) => {
        dispatch(addExpense({ id: snapshot.key, ...expenseData }));
      }).catch((e) => {
        console.log('ERROR', e);
      });
  };
};

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => (dispatch, dupa) => {
  if (id) { // dupa is getState - just for fun ;)
    return db.ref(`users/${dupa().auth.uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  }
  return new Promise();
};
// EDIT_EXPENSE

export const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  expense,
  id
});

export const startEditExpense = (id, expense) => (dispatch, getState) =>
  db.ref(`users/${getState().auth.uid}/expenses/${id}`)
    .update(expense).then(() => dispatch(editExpense(id, expense)));


// SET_EXPENSES

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => (dispatch, getState) => {
  // const uid = getState().auth.uid;
  const { auth: { uid } } = getState(); // same as obove
  return db.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((snapshotChild) => {
      expenses.push({ id: snapshotChild.key, ...snapshotChild.val() });
    });
    dispatch(setExpenses(expenses));
  });
};

