import React from 'react'
import { CgAdd } from "react-icons/cg";

function NewTodoButton(props) {
  return (
      <button className="button" onClick={props.onClick}>
          <p>New Todo</p>
          <CgAdd className="new-todo-icon" />
    </button>
  )
}

export default NewTodoButton