import React from 'react'
import TodoList from '../components/TodoList.jsx'
import NewTodoButton from '../components/NewTodoButton.jsx'
import TodoContent from '../components/TodoContent.jsx'

function TodoPage() {
  return (
    <div className="todo-page">
      <div className="sidebar">
        <h2 className="sidebar-header">Todos</h2>
        <div className="sidebar-content">
          <TodoList />
          <NewTodoButton />
        </div>
      </div>

      <div className="content">
        <TodoContent />
      </div>
    </div>
  )
}

export default TodoPage