import { useState } from 'react';

const CustomMultiSelect = () => {
  const [options, setOptions] = useState([]);
  console.log(options);
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);

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
          <span key={index}  className='bg-sky-300 text-white px-1 rounded-md text-sm' style={{ margin: '0 5px', display: 'inline-block' }}>
            {option} <button className='text-white' onClick={() => handleRemoveOption(option)}>x</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        className='input input-bordered input-sm rounded-sm w-full text-black bg-white'
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press space to add"
      />
    </div>
  );
};

export default CustomMultiSelect;
