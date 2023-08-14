import React, { FC } from 'react';

interface RegistrationFieldProps {
  label: string;
  labelPosition: string;
  inputType: string;
  inputId: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RegistrationField: FC<RegistrationFieldProps> = ({
  label,
  labelPosition,
  inputId,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  if (labelPosition === 'left') {
    return (
      <label className="flex gap-1 flex-col" htmlFor={inputId}>
        {label}
        <input
          className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0"
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
};

export default RegistrationField;
