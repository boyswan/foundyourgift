import React from 'react';
import App from 'app';
import { Home, Search, NoMatch } from 'views';
import { Router, Route, Link, browserHistory } from 'react-router'

export default () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="search" component={Search}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
