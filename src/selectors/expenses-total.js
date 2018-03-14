import moment from 'moment';

const expenses = [
  {
    id: '0',
    description: 'Gum',
    notes: '',
    amount: 199,
    createdAt: 0
  },
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
    amount: 97,
    createdAt: moment(0).add(5,'day').valueOf()
  }
];

//const getExpensesTotal = expenses => expenses.reduce((prev, curr) => ({ amount: prev.amount + curr.amount }), { amount: 0 }).amount;
const getExpensesTotal = expenses => expenses.map(expense => expense.amount).reduce((prev, curr) => prev + curr, 0);

export default getExpensesTotal;

