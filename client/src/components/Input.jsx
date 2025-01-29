import React from 'react';

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded mb-4"
    />
  );
};

export default Input;
