import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Expenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(item => (<ExpenseListItem key={item.id}{...item}/>))}
    </div>
);


const mapStateToProps = (state) => ({
    expenses: Expenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList)