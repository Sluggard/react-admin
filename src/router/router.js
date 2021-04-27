import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '@/views/login/Login'
import MainLayout from '@/components/layout/Layout'
import Menu from '@/views/sys/menu/Menu'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={MainLayout}>
        <MainLayout>
          <Route path="/sys/menu" component={Menu} />
        </MainLayout>
      </Route>
    </Switch>
  </HashRouter>
)

export default Router
