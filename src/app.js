import 'app.css';
import 'utils/ramda';
import React from 'react';
import render from 'utils/render';
import { Router, Route, Link, browserHistory } from 'react-router'
import { Home, Search, NoMatch } from 'views';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="search" component={Search}/>
    <Route path="*" component={NoMatch}/>
  </Router>
));
