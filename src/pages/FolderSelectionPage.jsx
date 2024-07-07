import React from 'react';

function FolderSelectionPage()
{
  const openFolder = () => asyncOpenFolder();

  const asyncOpenFolder = async () =>
  {
    console.log("Open folder");
  }

  return (
    <div className="folder-selection-page">
      <p className="folder-selection-text">No folder currently opened</p>
      <button className="button" onClick={openFolder}>Open a folder</button>
    </div>
  );
}

export default FolderSelectionPage;