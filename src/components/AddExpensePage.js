import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    //console.log(expense);
    //props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
      <h1> Add Expense </h1>
      <ExpenseForm 
        expense={{}}
        onSubmit={this.onSubmit}
      />
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({ addExpense: (expense) => dispatch(addExpense(expense)) });

export default connect(null, mapDispatchToProps)(AddExpensePage);
