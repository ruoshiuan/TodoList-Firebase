import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '../src/page/HomePage'
import ListPage from '../src/page/ListPage'
import ListPageHook from '../src/page/ListPageHook'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const App = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/todo_class" component={ListPage} />
            <Route exact path="/todo_hook" component={ListPageHook} />
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)