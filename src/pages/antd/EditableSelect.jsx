import React, { useState } from 'react';
import { Select, Input } from 'antd';

const EditableSelect = ({ options, onOptionsChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    setIsEditing(false);
  };

  const handleSelectClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Input
          value={selectedValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <Select
          value={selectedValue}
          onChange={handleSelectChange}
          onClick={handleSelectClick}
          {...props}
        >
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default EditableSelect;
