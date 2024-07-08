import React from 'react'

function TodoListItem(props)
{
  return (
    <button className={"todo-list-item" + (props.active ? ' todo-list-active' : '')} onClick={() => props.onClick(props.item)}>
      <h3 className="todo-list-item-title">{props.item.title.substring(0, 25) + (props.item.title.length > 25 ? '...' : '')}</h3>
      <p className="todo-list-item-description">{props.item.content.substring(0, 25) + (props.item.content.length > 25 ? '...' : '')}</p>
    </button>
  )
}

export default TodoListItem