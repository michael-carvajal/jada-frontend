import React from 'react';

interface TextAreaFieldProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, required = false, value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
