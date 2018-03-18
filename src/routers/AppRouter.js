import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpansifyDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <PrivateRoute path="/" component={LoginPage} exact notPrivate />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <PrivateRoute path="/dashboard" component={ExpansifyDashboardPage} />
          <Route path="/help" component={HelpPage} />
          {/** Same as above: <Route path="/help" component={(props) => <HelpPage {...props}/> } /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
