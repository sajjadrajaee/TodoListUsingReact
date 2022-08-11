/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItems';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
