import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    //console.log('updated',expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.removeExpense (this.props.expense);
    this.props.history.push('/');
  }
  render() {
    return  (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}
        >X</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) =>{
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};
const mapsDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id,expense)),
    removeExpense: expense => dispatch(removeExpense(expense))
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(EditExpensePage);  