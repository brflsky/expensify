import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense.description ? props.expense.description : '',
      notes: props.expense.notes ? props.expense.notes : '',
      amount: props.expense.amount ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense.createdAt ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNotesChange = (e) => {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onRemoveClick = (e) => {
    e.preventDefault();
    this.props.onRemove();
  }

  onDateChange = (createdAt) => {
    if (createdAt)
      this.setState(() => ({ createdAt }));
  }
  onCalenderFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter required values' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        notes: this.state.notes,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          id="description"
          type="text"
          className="text-input"
          placeholder="Expense Title"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calenderFocused}
          onFocusChange={this.onCalenderFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add some notes here"
          onChange={this.onNotesChange}
          value={this.state.notes}
        />
        <div className="header__content">
          <button className="button">Save Expense</button>
          {this.props.expense.id && <button className="button button--second" onClick={this.onRemoveClick}>Remove Expense</button>}
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
