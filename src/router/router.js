import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../views/login/Login'
const customHistory = require('history').createBrowserHistory

const Router = () => (
  <HashRouter history={customHistory}>
    <Switch>
      {/* <Route exact path="/" component={Index} /> */}
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default Router
