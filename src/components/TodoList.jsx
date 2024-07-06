import React from 'react'
import TodoListItem from './TodoListItem.jsx'

function TodoList() {
  return (
      <ul className="todo-list">
          <TodoListItem title="Todo Item 1" description="A todo item 1" />
          <TodoListItem title="Todo Item 2" description="A todo item 2" />
          <TodoListItem title="Todo Item 3" description="A todo item 3" />
    </ul>
  )
}

export default TodoList