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
  return (dispatch) => {
    return db.ref('expenses').push(expenseData)
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

// EDIT_EXPENSE

export const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  expense,
  id
});
