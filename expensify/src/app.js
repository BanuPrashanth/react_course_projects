import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This  is from Add Expense Page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from Edit Expense Page
    </div>
);

const HelpPage = () => (
    <div>
        This is from Help page
    </div>
);

const PageNotFound = () => (
    <div>
        <h1>404! Page Not Found!!</h1> 
        <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <div>
    <header>
        <h1>Expenisy</h1>
    </header>
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
    </div>
);

const template = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(template, document.getElementById('app'));
