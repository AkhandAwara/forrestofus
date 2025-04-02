import React, { useState } from 'react';
import './dos-theme.css';

function CommandLine() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setOutput((prevOutput) => [...prevOutput, `> ${input}`]);
      setInput('');
    }
  };

  return (
    <div className="command-line">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="command-input"
          placeholder="Enter command..."
        />
      </form>
      <div className="command-output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default CommandLine;