import React from "react";
import TodoList from "./components/TodoList.jsx";
import NoTodoContent from "./components/NoTodoContent.jsx";
import NewTodoButton from "./components/NewTodoButton.jsx";
import TodoContent from "./components/TodoContent.jsx";

function Root() {
  return (
    <div>
      <div className="topbar"></div>
      <div className="main">
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
    </div>
  );
}

export default Root;
