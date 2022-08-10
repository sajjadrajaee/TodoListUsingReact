import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import '../App.css'

class TodoContainer extends React.Component {
  state = {
    todo: [
      {
        id: uuidv4(),
        title: "setup dev component",
        completed: true
      },
      {
        id: uuidv4(),
        title: "develop website",
        completed: false
      },
      {
        id: uuidv4(),
        title: "finish project",
        completed: false
      }
    ]
  };
  handleChange = (id) => {
    this.setState(prevState => ({
      todo: prevState.todo.map(doit => {
        if (doit.id === id) {
          return {
            ...doit,
            completed: !doit.completed,
          }

        }
        return doit;
      })
    }));
  }

  delTodo = id => {
    this.setState({
      todo: [
        ...this.state.todo.filter(doit => {
          return doit.id !== id;
        })
      ]
    });
  };

  addTodoItem = item => {
    const newTodo = {
      id: uuidv4(),
      title: item,
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  }
  render() {
    return (

      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={this.addTodoItem} />
          <TodosList todos={this.state.todo} handleChangeProps={this.handleChange} delTodoProps={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default TodoContainer;