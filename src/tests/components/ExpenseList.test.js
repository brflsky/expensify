import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import {expenses} from '../fixtures';

test('should render expense list', () => {
  const wrapper = shallow(<ExpenseList  expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty list', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
