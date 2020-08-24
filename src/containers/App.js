import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import News from '../components/News/News';
import Users from '../components/Users/Users';

import classes from './App.css';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Aux>
          <header>
            <nav className={classes.NavBarList}>
              <ul>
                <li><NavLink
                  to="/home/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}>Home</NavLink>
                </li>
                <li><NavLink
                  to="/news/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}>News</NavLink>
                </li>
                <li><NavLink
                  to="/users/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}>Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/users" component={Users} />
            <Redirect from="/" to="/home" />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </Aux>
      </BrowserRouter>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
