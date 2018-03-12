//import momemt from 'moment';
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
}