import expensesReducer from '../../reducers/expenses.js';
import  {expenses}  from '../fixtures'
import moment from 'moment';

test('should modify expense object' , () => {
  
  const newExpenses = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
      expense: {
        id: '1',
        description: 'Car Rental for April',
        notes: '',
        amount: 43500,
        createdAt: -432000000      
      },
    id: '1'
  });
  expect(newExpenses).toEqual([
    {
      id: '0',
      description: 'Gum',
      notes: '',
      amount: 199,
      createdAt: 0
    },
    {  id: '1',
      description: 'Car Rental for April',
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