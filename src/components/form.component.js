import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/';

let TodoForm = ({dispatch}) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
      <input type="text"
             ref={node => {
               input = node;
             }}/>
      <button type="submit">+</button>
    </form>
  );
};
TodoForm = connect(dispatch => dispatch)(TodoForm);

export default TodoForm;