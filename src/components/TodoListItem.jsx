import React from 'react'

function TodoListItem(props)
{
  return (
    <button className={"todo-list-item" + (props.active ? ' todo-list-active' : '')} onClick={() => props.onClick(props.item)}>
      <h3 className="todo-list-item-title">{props.item.title}</h3>
      <p className="todo-list-item-description">{props.item.content.substring(0, 50)}</p>
    </button>
  )
}

export default TodoListItem