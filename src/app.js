import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import createStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';


const store = createStore();
// console.log('test');
// store.subscribe(() => {
//   console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// });

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

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = false;
  }
};

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
