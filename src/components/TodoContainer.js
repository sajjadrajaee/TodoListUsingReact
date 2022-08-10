import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state= {
    todo :[ 
      {
        id:1,
        title: "setup dev component",
        completed: true
      },
      {
        id:2,
        title: "develop website",
        completed:false
      },
      {
        id:3,
        title: "finish project",
        completed:false
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
        ...this.state.todo.filter( doit => {
          return doit.id !== id;
        })
      ]
    });
  };
  render() {
    return (
      
      <div>
        <Header />
        <TodosList todos={this.state.todo} handleChangeProps={this.handleChange} delTodoProps={this.delTodo}/>
      </div>
    )
  }
}

export default TodoContainer;