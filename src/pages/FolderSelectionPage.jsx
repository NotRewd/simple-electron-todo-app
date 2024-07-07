import React from 'react';

function FolderSelectionPage(props)
{
  const loadTodosFromFolder = () => asyncLoadTodosFromFolder();

  const asyncLoadTodosFromFolder = async () =>
  {
    const result = await electronAPI.loadTodosFromFolder();

    if (result)
    {
      props.onFolderPicked();
      props.onTodoItemsLoaded(result);
    }
  }

  return (
    <div className="folder-selection-page">
      <p className="folder-selection-text">No folder currently opened</p>
      <button className="button" onClick={loadTodosFromFolder}>Open a folder</button>
    </div>
  );
}

export default FolderSelectionPage;