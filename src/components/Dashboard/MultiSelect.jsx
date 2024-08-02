import { useState } from 'react';

const MultiSelect = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      if (inputValue.trim()) {
        setOptions([...options, inputValue.trim()]);
        setInputValue('');
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    setOptions(options.filter((option) => option !== optionToRemove));
  };

  return (
    <div>
      <div>
        {options.map((option, index) => (
          <span key={index} style={{ margin: '0 5px', display: 'inline-block' }}>
            {option} <button onClick={() => handleRemoveOption(option)}>x</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press space to add"
      />
    </div>
  );
};

export default MultiSelect;
