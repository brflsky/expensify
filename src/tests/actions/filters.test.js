import moment from 'moment';
import { setEndDate, setSortAsc, setStartDate, setTextFilter, sortByDate, sortByAmount   } from '../../actions/filters';

test('should generate seStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate SET_TEXT_FILTER action object for default value', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate SET_TEXT_FILTER action object', () => {
  const action = setTextFilter('going good');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'going good'
  });
});

test('should generate SORT_BY_DATE action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate SORT_BY_AMOUNT action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate SET_SORT_ASC  action object for default', () => {
  const action = setSortAsc();
  expect(action).toEqual({
    type: 'SET_SORT_ASC',
    sortAsc: true
  });
});

test('should generate SET_SORT_ASC  action object for false value', () => {
  const action = setSortAsc(false);
  expect(action).toEqual({
    type: 'SET_SORT_ASC',
    sortAsc: false
  });
});

