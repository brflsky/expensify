import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpansifyDashboardPage = (props) => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList history={props.history} />
  </div>
);

export default ExpansifyDashboardPage;
