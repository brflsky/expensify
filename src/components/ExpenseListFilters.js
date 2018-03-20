import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setSortAsc, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null,
    sortAsc: true
  };


  onDateChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  }

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else {
      this.props.sortByAmount();
    }
  }

  onToggleSort = (e) => {
    const sortAsc = !this.state.sortAsc;
    this.setState((state) => ({
      ...state,
      sortAsc
    }));
    if (sortAsc) {
      this.props.setSortAsc(true);
    } else {
      this.props.setSortAsc(false);
    }
  }

  onSortAscDescChange = (e) => {
    if (e.target.value === 'true') {
      this.props.setSortAsc(true);
    } else {
      this.props.setSortAsc(false);
    }
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input className="text-input" placeholder="Search Expenses" type="text" value={this.props.filters.text} onChange={this.onTextChange} />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              onChange={this.onSortChange}
              value={this.props.filters.sortBy}
              placeholder="Add Expenses"
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
          <p id="sortAsc" onClick={this.onToggleSort} className="sortAsc">{this.state.sortAsc ? '\u21E7' : '\u21E9'}</p>
           {/** {this.state.sortAsc ? <p  className="">(&#11014)</p> : <p  className="">(&#11015)</p>}
             <select
              className="select"
              onChange={this.onSortAscDescChange}
              value={this.props.filters.sortAsc ? 'true' : 'false'}
            >
              <option value="true">Asc</option>
              <option value="false">Desc</option>
            </select> */}
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDateChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setSortAsc: (e) => dispatch(setSortAsc(e)),
    setTextFilter: (e) => dispatch(setTextFilter(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
