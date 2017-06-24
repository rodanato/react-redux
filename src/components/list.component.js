import React from 'react';
import Todo from './todo.component';

let TodoList = ({ todos, onTodoClick }) => {
  const todoNode = todos.map((todo) => {
    return (<Todo
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)} />);
  });

  return (<ul>{todoNode}</ul>);
};

export default TodoList;