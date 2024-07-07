import React from 'react'

function TodoListItem(props) {
  return (
    <button className="todo-list-item">
      <h3 className="todo-list-item-title">{props.title}</h3>
      <p className="todo-list-item-description">{props.description}</p>
    </button>
  )
}

export default TodoListItem