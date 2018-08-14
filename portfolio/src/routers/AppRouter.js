import React from 'react';
import Headers from '../components/Headers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Portfoilo from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Headers />
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/portfolio/" component={Portfoilo} exact={true}/>
            <Route path="/contact" component={Contact} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
