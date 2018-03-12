import moment from 'moment';

// Filters Reducer


const filteresStateDefault = {
  text: '',
  sortBy: 'amount',
  sortAsc: false,
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state = filteresStateDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': 
      return {...state, text: action.text }
    case 'SORT_BY_DATE': 
      return {...state, sortBy: 'date'}
    case 'SORT_BY_AMOUNT': 
      return {...state, sortBy: 'amount'}
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate }
    case 'SET_SORT_ASC': 
      return {...state, sortAsc: action.sortAsc}
    default:
      return state;
  }
}