import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import {expenses} from '../fixtures';

test('Shold render single expense ', () => {
const wrapper = shallow(<ExpenseListItem index={0} { ...expenses[0] }/>);
expect(wrapper).toMatchSnapshot();

});