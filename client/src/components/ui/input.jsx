import React from 'react';

export const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded px-4 py-2 ${className}`}
    />
  );
};

export default Input;