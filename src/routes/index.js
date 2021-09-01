import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, Home } from '../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/detail">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
