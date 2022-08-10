import React from "react";
import styles from './TodoItem.module.scss'

class TodoItem extends React.Component {
  render() {
    const completeStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const {id,title,completed} = this.props.todo;
    return (
      <li className={styles.item}>
        <input type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)} />
        <button type="button" onClick={() => this.props.delTodoProps(id)}>Delete</button>
        <span style={completed ? completeStyle : null}>
          {title}
        </span>
      </li>
    )
  }
}

export default TodoItem;