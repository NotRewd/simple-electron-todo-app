import React from 'react'

function TodoListItem(props) {
  return (
      <div className="todo-list-item">
          <h3 className="todo-list-item-title">{props.title}</h3>
          <p className="todo-list-item-description">{props.description}</p>
    </div>
  )
}

export default TodoListItem