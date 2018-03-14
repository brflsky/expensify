import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { expenses } from '../fixtures';

test('should render Expenses Summary for empty list', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Expenses Summary for empty list', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
