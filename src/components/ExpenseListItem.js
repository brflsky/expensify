import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import preventClickthrough from 'react-prevent-clickthrough';
import { startRemoveExpense } from '../actions/expenses';

// export const ExpenseListItem = (props) => {
//   // console.log('props', props);
//   return (
//     <Link className="list-item" to={`/edit/${props.id}`} >
//       <div>
//         <h3 className="list-item__title">{props.index}. &nbsp; {props.description}</h3>
//         <span className="list-item__sub-title">{moment(props.createdAt).format('Do-MMMM-YYYY')}</span>
//       </div>
//       <div>
//       <h3 className="list-item__data">{numeral(props.amount / 100).format('$0,0.00')}</h3>
//       <button className="list-item__button" onClick={(e) => { props.dispatch(startRemoveExpense(props, e)); }}>remove</button>
//       </div>
//     </Link>
//   );
// };

export class ExpenseListItem extends React.Component {
  onRemove = (e) => {
    e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
    //e.stopPropagation();
    this.props.dispatch(startRemoveExpense(this.props));
  }
  onChoose = (e) => {
    this.props.history.push(`/edit/${this.props.id}`);
  }
  render() {
    return (
      <div className="list-item" onClick={this.onChoose} >
        <div>
          <h3 className="list-item__title">{this.props.index}. &nbsp; {this.props.description}</h3>
          <span className="list-item__sub-title">{moment(this.props.createdAt).format('Do-MMMM-YYYY')}</span>
        </div>
        <div>
          <h3 className="list-item__data">{numeral(this.props.amount / 100).format('$0,0.00')}</h3>
          <button className="list-item__button" onClick={this.onRemove}>remove</button>
        </div>
      </div>
    );
  }
}

export default connect()(ExpenseListItem);
