import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD EXPENSE

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
}

// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE

const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  expense,
  id
});

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT BY DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT BY AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET START DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET END DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

//SET SORT ASC
const setSortAsc = (sortAsc = true) => ({
  type: 'SET_SORT_ASC',
  sortAsc
});

//Expenses Reducer

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      return [...state, action.expense];
    case 'REMOVE_EXPENSE': 
      return state.filter((expense)=>expense.id !== action.id);
    case 'EDIT_EXPENSE': 
      return state.map((expense) => expense.id === action.id ? {...expense, ...action.expense} : expense);
    default:
     return state;
  }
}



// Filters Reducer


const filteresStateDefault = {
  text: '',
  sortBy: 'amount',
  sortAsc: true,
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filteresStateDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': 
      return {...state, text: action.text }
    case 'SORT_BY_DATE': 
      return {...state, sortBy: 'date'}
    case 'SORT_BY_AMOUNT': 
      return {...state, sortBy: 'amount'}
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate }
    case 'SET_SORT_ASC': 
      return {...state, sortAsc: action.sortAsc}
    default:
      return state;
  }
}

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy, sortAsc}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt ;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt ;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;a
  }).sort((a, b) => {
    if (sortBy === 'date') {
     return (a.createdAt < b.createdAt ? -1 : 1) * (sortAsc ? 1 : -1);
    } else {
     return (a.amount < b.amount ? -1 : 1) * (sortAsc ? 1 : -1);
    }
  });
}


// Store creation

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description: 'Rent', note: 'Firs for Jan', amount: 100, createdAt: 1000}));
const expense2 = store.dispatch(addExpense({description: 'Coffe', note: 'Expresso', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByDate());
 store.dispatch(sortByAmount());
 store.dispatch(setSortAsc());

 console.log(store.getState());

//store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(250));

const demoState = {
  expenses: [{
    id: 'asdfsdf',
    description: 'Jan. Rent',
    note: 'Final payment for January',
    amount: 45600,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    sortAsc: true,
    startDate: undefined,
    endDate: undefined,
  }
};


const user ={
  name: 'Rafal',
  age: 24
}

