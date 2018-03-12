import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../fixtures';

test('should render expense form', () => {
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render form for error for invalid values', () => {
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New Value of description';
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  wrapper.find('#description').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toEqual(value);
});

test('should set notes on note input change', () => {
  const value = 'new notes';
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('notes')).toEqual(value);
});

test('shold not set invalid amount', () => {
  const value = '12.444';
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('Sholud call onSubmit with valid values', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    notes: expenses[0].notes,
    createdAt: expenses[0].createdAt
  });
});

test('should set date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus date picker', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm expense={{}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calenderFocused')).toEqual(focused);
});
