import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => {
  // console.log('props', props);
  return (
    <div>
      <p>{props.index} <Link to={`/edit/${props.id}`} >{props.description}</Link>  {props.amount} {props.createdAt}

        <button onClick={() => { props.dispatch(removeExpense(props)); }}>X</button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
