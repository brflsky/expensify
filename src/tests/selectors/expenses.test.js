import moment from 'moment';
import select from '../../selectors/expenses';
import { expenses } from '../fixtures';


test('sholud filtered out by description "e" ', () => {
  //console.log('###########################', expenses[2].createdAt);
  const result = select(expenses, {
    text: 'e',
    startDate: undefined,
    endDate: undefined, 
    sortBy: 'date',
    sortAsc: true
  } );
  expect(result).toEqual([
    {  id: '1',
    description: 'Car Rental',
    notes: '',
    amount: 43500,
    createdAt: -432000000
  },
  {    
    id: '2',
    description: 'Wine',
    notes: '',
    amount: 199,
    createdAt: moment(0).add(5,'day').valueOf()
  }
  ]);
});