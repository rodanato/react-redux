import React from 'react';

let TodoLinks = ({onTodoClick}) => {
    return (
        <footer>
            <span onClick={()=> onTodoClick('SHOW_ALL')}>Show all</span>
            <span onClick={()=> onTodoClick('SHOW_COMPLETED')}>Show completed</span>
            <span onClick={()=> onTodoClick('SHOW_ACTIVE')}>Show active</span>
        </footer>   
    );
};

export default TodoLinks;