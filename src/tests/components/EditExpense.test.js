import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import {expenses} from '../fixtures';
//import { removeExpense } from '../../actions/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper =  shallow(<EditExpensePage removeExpense={removeExpense} editExpense={editExpense} history={history} expense={expenses[1]}/>);
})

test('should render Edit Expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should submit edited form', () => {
  //wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  const newExpense = expenses[1];
  newExpense.description = 'dupa';
  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith('1',newExpense);
});

test('should delete expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1]);
});