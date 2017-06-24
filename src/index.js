import React    from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp  from './app';

const container = document.getElementById('root');

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  container
);
