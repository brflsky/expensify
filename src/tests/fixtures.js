import  moment  from 'moment';

export const expenses = [
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
    amount: 199,
    createdAt: moment(0).add(5,'day').valueOf()
  }
];

export const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
  sortAsc: true
};

export const altFilters = {
  text: 'rent',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
  sortAsc: false
};