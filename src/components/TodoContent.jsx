import React from 'react'

function TodoContent(props) {
  return (
    <div className="todo-content">
      <input
        type="text"
        className="todo-input"
        placeholder="Title"
      />
      <textarea
        type="text"
        className="todo-textarea"
        placeholder="What needs to be done?"
      />
    </div>
  )
}

export default TodoContent