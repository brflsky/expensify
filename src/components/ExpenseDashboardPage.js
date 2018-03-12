import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';



const ExpansifyDashboardPage = () => (
  <div>From Dashboard
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpansifyDashboardPage;