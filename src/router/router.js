import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../views/login/Login'
import MainLayout from '../components/layout/Layout'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/index" component={MainLayout} />
      <Route exact path="/" redirect="/index" component={MainLayout} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default Router
