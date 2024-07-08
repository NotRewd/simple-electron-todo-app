import React from 'react'
import TodoListItem from './TodoListItem.jsx'

function TodoList(props)
{
  const handleOnTodoClick = (index) => props.onTodoSelected(index);

  return (
    <ul className="todo-list">
      {props.todoItems.map((item, index) => <TodoListItem key={item.id} item={item} active={props.activeTodoIndex === index} onClick={() => handleOnTodoClick(index)}/>)}
    </ul>
  )
}

export default TodoList