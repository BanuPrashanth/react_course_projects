import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleText from './selectors/expenses';

const store = configureStore();

//addexpense waterbill, gasbill
//setTextFilter bill
//getVisible expense

store.dispatch(addExpense({description: 'Water Bill', note: 'August Months water bill', amount: 2300}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 900}));
store.dispatch(setTextFilter('Water'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
