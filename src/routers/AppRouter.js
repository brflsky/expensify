import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddExpensPage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpansifyDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpansifyDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default AppRouter;