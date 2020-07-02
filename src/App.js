import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import './style/css/index.css'
// Pages
import MainPage from './pages'
import CommandsPage from './pages/commands'
import NotFoundPage from './pages/404'

export default class App extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={MainPage}/>
        <Route exact path={process.env.PUBLIC_URL + '/commands'} component={CommandsPage}/>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/commands' component={CommandsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  }
}
