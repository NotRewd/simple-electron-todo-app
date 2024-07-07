import React from 'react';

function FolderSelectionPage()
{
  const loadTodosFromFolder = () => asyncLoadTodosFromFolder();

  const asyncLoadTodosFromFolder = async () =>
  {
    const result = await electronAPI.loadTodosFromFolder();
    console.log(result);
  }

  return (
    <div className="folder-selection-page">
      <p className="folder-selection-text">No folder currently opened</p>
      <button className="button" onClick={loadTodosFromFolder}>Open a folder</button>
    </div>
  );
}

export default FolderSelectionPage;