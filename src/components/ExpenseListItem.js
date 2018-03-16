import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => {
  // console.log('props', props);
  return (
    <div>
      <p>
        {props.index}. &nbsp;
        <Link to={`/edit/${props.id}`} >{props.description}</Link>&nbsp;
        {numeral(props.amount / 100).format('$0,0.00')}&nbsp;
        {moment(props.createdAt).format('Do-MMMM-YYYY')}&nbsp;&nbsp;
        <button onClick={() => { props.dispatch(startRemoveExpense(props)); }}>X</button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
