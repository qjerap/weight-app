import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import Log from '../components/Log'
import Chart from '../components/Chart'
import Add from '../components/Add'
import Stats from '../components/Stats'
import Info from '../components/Info'
import Nav from '../components/Nav'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="dashboard">
            <Nav />
            <Log />
            <Add />
            <Stats />
            <Switch>
                <Route path="/" component={Chart} exact />
                <Route path="/info" component={Info} />
            </Switch>      
        </div>
    </Router>
);


export default AppRouter;