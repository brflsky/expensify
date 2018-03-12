import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import createStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = createStore();

store.subscribe(() => {
  console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
});

// store.dispatch(addExpense({createdAt: 5000 ,description: 'Gas Bill', amount: 345}));
// store.dispatch(addExpense({createdAt: 2000 ,description: 'Rent', amount: 19000}));
// store.dispatch(addExpense({createdAt: 1000 , description: 'Water Bill', amount: 790}));
// console.log(store.getState());  


// setTimeout(() => {store.dispatch(setTextFilter('water'));},3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


