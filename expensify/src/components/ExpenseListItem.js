import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
        <p>Amount: {amount} CreatedAt: {createdAt}</p> 
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseListItem);
