import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';

export default Root => render(
  <Provider store={store}>
    {Root}
  </Provider>,
  document.getElementById('app')
);
