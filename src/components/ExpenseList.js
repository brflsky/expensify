import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectedExpenseList from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length > 0 ? props.expenses.map((expense, index) => (
        <ExpenseListItem
          key={expense.id}
          id={expense.id}
          index={index + 1}
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
          history={props.history}
        />
      )) :
        (
          <div className="list-item list-item--message">
            <span>Nothing to show... ad something</span>
          </div>
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenseList(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

// export default ConnectedExpenseList;