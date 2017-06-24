import React from 'react';

let Todo = ({onClick, completed, text}) => {
  return (
    <li style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
      <span className="remove-todo"
            onClick={onClick}>
        x
      </span>
    </li>
  );
};


export default Todo;