import React from 'react';
import Title    from './components/title.component';
import TodoForm from './components/form.component';
import VisibleTodoList from './containers/visible-todo-list.container';
import VisibleTodoLinks from './containers/visible-todo-links.container';
import './styles.css';

const TodoApp = () => (
  <div>
    <Title />
    <TodoForm />
    <VisibleTodoList />
    <VisibleTodoLinks />
  </div>
);

export default TodoApp;
