import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EditableSelect from './EditableSelect';

const App = () => {
  const [options, setOptions] = useState([
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]);

  return (
    <div style={{ padding: 20 }}>
      <EditableSelect
        options={options}
        style={{ width: 200 }}
        placeholder="Select an option"
      />
    </div>
  );
};

export default App;
