import React from "react";
import TodoItem from "./TodoItems";

class TodosList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} delTodoProps={this.props.delTodoProps} setUpdate={this.props.setUpdate}/>
        ))}
        
      </ul>
    )
  }
}

export default TodosList;