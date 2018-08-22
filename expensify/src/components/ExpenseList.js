import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses[0].id}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseList)