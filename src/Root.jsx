import React from "react";
import TodoList from "./components/TodoList.jsx";
import NoTodoContent from "./components/NoTodoContent.jsx";
import NewTodoButton from "./components/NewTodoButton.jsx";

function Root() {
  return (
    <div className="main">
      <div className="sidebar">
        <h2 className="sidebar-header">Todos</h2>
        <TodoList />
        <NewTodoButton />
      </div>

      <div className="content">
        <NoTodoContent />
      </div>
    </div>
  );
}

export default Root;
