import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set start date filter', () =>{
  const currentState = {startDate: undefined};
  const state = filtersReducer(currentState, {type: 'SET_START_DATE', startDate: 1000})
  expect(state.startDate).toBe(1000);
});