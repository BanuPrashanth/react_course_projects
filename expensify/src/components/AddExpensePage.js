import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <ExpenseForm onSubmit={(expenses) => {
            props.dispatch(addExpense(expenses))
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);
