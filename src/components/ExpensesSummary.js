import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import select from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expenses.length}</span>. Total cost: <span>{numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create" >Add Expense</Link>
      </div>
    </div>
  </div>
);


const mapStateToProps = (state) => ({
  expenses: select(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
