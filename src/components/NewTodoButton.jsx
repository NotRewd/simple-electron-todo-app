import React from 'react'
import { CgAdd } from "react-icons/cg";

function NewTodoButton() {
  return (
      <button className="button">
          <p>New Todo</p>
          <CgAdd className="new-todo-icon" />
    </button>
  )
}

export default NewTodoButton