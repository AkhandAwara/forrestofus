import React from 'react';

const FileExplorer = () => {
  const files = [
    { name: 'file1.txt', type: 'file' },
    { name: 'file2.txt', type: 'file' },
    { name: 'folder1', type: 'folder' },
    { name: 'folder2', type: 'folder' },
  ];

  return (
    <div className="file-explorer">
      <h2>File Explorer</h2>
      <ul>
        {files.map((item, index) => (
          <li key={index} className={item.type}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;