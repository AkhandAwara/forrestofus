import React from 'react';
import CommandLine from './components/CommandLine';
import FileExplorer from './components/FileExplorer';
import './styles/dos-theme.css';

function App() {
  return (
    <div className="dos-ui">
      <h1>DOS-like User Interface</h1>
      <FileExplorer />
      <CommandLine />
    </div>
  );
}

export default App;