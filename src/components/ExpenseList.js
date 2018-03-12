import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectedExpenseList from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
      {props.expenses.length > 0 ?  props.expenses.map((expense, index) => (
      <ExpenseListItem 
        key={expense.id}
        id={expense.id}
        index={index+1}
        description={expense.description}
        amount={expense.amount}
        createdAt={expense.createdAt}
      />
    )) : 
    <p>Nothing to show... ad something</p>
  }
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