import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { shallow } from 'enzyme';
import { filters, altFilters } from '../fixtures';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setSortAsc, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setSortAsc = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    setSortAsc={setSortAsc}
  />);
});

test('should render expense filter', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense filter', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text filter', () => {
  wrapper.find('input').simulate('change',
    { target: { value: 'newVal' } }
  );
  expect(setTextFilter).toHaveBeenLastCalledWith('newVal');
});
test('should handle text startDateFilter', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: moment(0), endDate: moment(1000) });
  expect(setStartDate).toHaveBeenLastCalledWith(moment(0));
});

test('should handle text startDateFilter', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: moment(0), endDate: moment(1000) });
  expect(setEndDate).toHaveBeenLastCalledWith(moment(1000));
});
// test('should handle text sortAsc to true', () => {
//   wrapper.find('select').at(1).simulate('change', { target: { value: 'false' } });
//   expect(setSortAsc).toHaveBeenLastCalledWith(false);
// });
// test('should handle text sortAsc to false', () => {
//   wrapper.find('select').at(1).simulate('change', { target: { value: 'false' } });
//   expect(setSortAsc).toHaveBeenLastCalledWith(false);
// });
test('should handle text SordBy amount', () => {
  wrapper.find('select').at(0).simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalled();
});
test('should handle text SordBy date', () => {
  wrapper.find('select').at(0).simulate('change', { target: { value: 'date' } });
  expect(sortByDate).toHaveBeenCalled();
});

test('sholud set setSortAsc ', () => {
  wrapper.find('#sortAsc').simulate('click');
  expect(setSortAsc).toHaveBeenCalled();
});