import React, { useState } from "react";
import FolderSelectionPage from "./pages/FolderSelectionPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function Root()
{
  const [folderPicked, setFolderPicked] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  const onFolderPicked = () => setFolderPicked(true);
  const onTodoItemsLoaded = (items) => setTodoItems(items);

  return (
    <div>
      <div className="topbar"></div>
      {!folderPicked ? <FolderSelectionPage onFolderPicked={onFolderPicked} onTodoItemsLoaded={onTodoItemsLoaded} /> : <TodoPage todoItems={todoItems} />}
    </div>
  );
}

export default Root;
