import React from 'react'
import TodoListItem from './TodoListItem.jsx'
import { useState } from 'react';

function TodoList(props)
{
  const [activeTodoIndex, setActiveTodoIndex] = useState(-1);

  const handleOnTodoClick = (index) =>
  { 
    setActiveTodoIndex(index);
    props.onTodoSelected(index);
  };

  return (
    <ul className="todo-list">
      {props.todoItems.map((item, index) => <TodoListItem key={item.id} item={item} active={activeTodoIndex === index} onClick={() => handleOnTodoClick(index)}/>)}
    </ul>
  )
}

export default TodoList