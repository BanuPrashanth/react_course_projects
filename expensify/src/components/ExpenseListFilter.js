import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component{
    state = {
        calenderFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({calenderFocused: focusedInput}))
    }
    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
            }}/>
            <select value={this.props.filters.sortBy} onChange={(e) => {
                e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
            }}>
                <option value = "date">Date</option>
                <option value = "amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId="start"
                endDate={this.props.filters.endDate}
                endDateId="end"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);

