import React, { useEffect } from 'react'
import { useState } from 'react';

function TodoContent(props)
{
  const [todoTitle, setTodoTitle] = useState(props.todoItem.title);
  const [todoContent, setTodoContent] = useState(props.todoItem.content);

  useEffect(() =>
  {
    setTodoTitle(props.todoItem.title);
    setTodoContent(props.todoItem.content);
  }, [props.todoItem]);

  return (
    <div className="todo-content">
      <input
        type="text"
        className="todo-input"
        placeholder="Title"
        value={todoTitle}
        onChange={(event) =>
        {
          setTodoTitle(event.target.value);
          props.onTitleChanged(event.target.value);
        }}
      />
      <textarea
        type="text"
        className="todo-textarea"
        placeholder="What needs to be done?"
        value={todoContent}
        onChange={(event) =>
        {
          setTodoContent(event.target.value);
          props.onContentChanged(event.target.value);
        }}
      />
    </div>
  )
}

export default TodoContent