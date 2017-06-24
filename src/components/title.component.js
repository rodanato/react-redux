import React from 'react';
import { connect } from 'react-redux'

let Title = (state) => {
  return (
    <div>
      <h1>TO-DOS ({state.todos.filter(t=>!t.completed).length})</h1>
    </div>
  );
};
Title = connect(state => state)(Title);


export default Title;