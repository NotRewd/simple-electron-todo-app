import React from "react";
import FolderSelectionPage from "./pages/FolderSelectionPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function Root() {
  return (
    <div>
      <div className="topbar"></div>
      <FolderSelectionPage />
    </div>
  );
}

export default Root;
