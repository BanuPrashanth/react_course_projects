import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleText from './selectors/expenses';

const store = configureStore();

if(process.env.NODE_ENV !== 'production'){
    console.log('development')
}else{
    console.log('Production')
}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
